const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        performance: {
            maxEntrypointSize: 50000000, //入口起点的最大体积
            maxAssetSize: 30000000, //生成文件的最大体积
        },
    },
    devServer: {
        proxy: {
            '/api/': {
                target: 'http://supplier.longtengec.com/',
                changeOrigin: true,
                ['/api/']: '',
            },
        },
    },
});
