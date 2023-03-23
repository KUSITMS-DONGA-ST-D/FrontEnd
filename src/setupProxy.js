const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/totalgrowthbarchart-phase1',
        createProxyMiddleware({
            target: 'http://simproject.kr:8080',
            changeOrigin: true
        })
    );
};
