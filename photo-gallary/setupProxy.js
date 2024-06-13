const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use('/src/main.tsx', function (req, res) {
        res.setHeader('Content-Type', 'application/typescript');
        res.end();
    });
};