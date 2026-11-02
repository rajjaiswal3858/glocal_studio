// Vercel Function entry: every non-static request is rewritten here and handled by the
// webpack-built Express SSR server (built by `npm run build` during the Vercel build).
const server = require('../build/public/server.js');

module.exports = server.default || server;
