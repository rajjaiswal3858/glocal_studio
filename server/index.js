import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import queryString from 'query-string';

import renderer from './renderer';
import apiRouter from "./api";

import { getApiBaseUrl } from "../src/utils/helpers";

const app = express();

const apiBaseUrl = getApiBaseUrl();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

// The SSR bundle lives next to the client assets; never serve server-only files publicly
app.use('/assets', (req, res, next) => {
	if (/(^|\/)(\d+\.)?server\.js|loadable-stats\.json/.test(req.path)) {
		res.status(404).end();
		return;
	}
	next();
});

// Serve assets from '/assets/' prefix
app.use('/assets', express.static(path.join(__dirname, '')));

// API for contact
app.use("/api", apiRouter)

app.get('/case-studies', async (req, res) => {
	const { category, page = 1 } = req.query;

	const wpUrl = queryString.stringifyUrl({
		url: `${apiBaseUrl}/v2/posts`,
		query: {
			'_fields': 'id,excerpt,title,slug,date_gmt,featured_media,featured_image_src,categories_meta,acf',
			per_page: 12,
			order: 'desc',
			status: 'publish',
			page,
			categories: category || null
		}
	}, { skipNull: true });

	const initialData = { posts: [], totalPages: 1, currentPage: Number(page) };

	try {
		const wpRes = await fetch(wpUrl, {
			headers: { 'Content-Type': 'application/json' }
		});

		if (!wpRes.ok) throw new Error(`Failed to fetch from WP: ${wpRes.status}`);

		const posts = await wpRes.json();
		const totalPages = wpRes.headers.get('X-WP-TotalPages') ?? 1;
		const totalRecords = wpRes.headers.get('x-wp-total') ?? 0;

		initialData.posts = posts;
		initialData.totalPages = Number(totalPages);
		initialData.totalRecords = Number(totalRecords);
	} catch (e) {
		console.error("SSR fetch error (CaseStudyList):", e);
	}

	renderer(req, res, initialData);
});


app.get('/case-studies/:slug', async (req, res) => {
	const { slug } = req.params;

	const wpUrl = queryString.stringifyUrl({
		url: `${apiBaseUrl}/v2/posts`,
		query: {
			'_fields': 'id,excerpt,content,title,slug,date_gmt,yoast_head_json,featured_media,featured_image_src,categories_meta,acf',
			slug,
		}
	}, {
		skipNull: true
	});

	let initialData = {};
	try {
		const response = await fetch(wpUrl);
		const data = await response.json();
		initialData = data[0] || {};

		let categoriesToFetch = '';

		initialData.categories_meta.forEach((category) => {
			categoriesToFetch += `${category.id},`;
		});

		const categoryUrl = queryString.stringifyUrl({
			url: `${getApiBaseUrl()}/v2/posts`,
			query: {
				'_fields': 'id,excerpt,title,slug,date_gmt,featured_media,featured_image_src,categories_meta,acf',
				per_page: 6,
				order: 'desc',
				status: 'publish',
				page: 1,
				categories: categoriesToFetch,
				exclude: initialData.id,
			}
		}, {
			skipNull: true
		});

		const relatedCategoryResponse = await fetch(categoryUrl);
		const relatedCategoryData = await relatedCategoryResponse.json();
		initialData.relatedPosts = relatedCategoryData;
	} catch (e) {
		console.error("SSR fetch error:", e);
	}

	renderer(req, res, initialData);
});

// Handle all other requests with SSR
app.use(renderer);

// Don't start the server manually if running in Vercel
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} `);
  });
}

// Export for Vercel
export default app;
