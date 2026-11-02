// Copies the client build into Vercel's static output folder so the CDN serves it at /assets/*.
// Server-only files (SSR bundle, chunk stats) are left out so they are never publicly downloadable.
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'build/public');
const outDir = path.join(root, '.vercel-static');
const assetsDir = path.join(outDir, 'assets');

const isServerOnly = (name) =>
	name === 'server.js' ||
	name === 'server.js.LICENSE.txt' ||
	name === 'loadable-stats.json' ||
	/\.server\.js(\.map)?$/.test(name) ||
	name.endsWith('.map');

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(assetsDir, { recursive: true });

let copied = 0;
for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
	if (entry.isFile() && isServerOnly(entry.name)) continue;
	fs.cpSync(path.join(source, entry.name), path.join(assetsDir, entry.name), { recursive: true });
	copied += 1;
}

// Crawlers request these at the site root
for (const name of ['robots.txt', 'favicon.png']) {
	if (fs.existsSync(path.join(source, name))) {
		fs.copyFileSync(path.join(source, name), path.join(outDir, name));
	}
}

console.log(`vercel-static: copied ${copied} entries to ${path.relative(root, assetsDir)}`);
