module.exports = {
    chainWebpack: config => {
        config.plugin("html").tap(args => {
            args[0].title = "Resido - Real estate blogs";
            return args;
        });
    },
    configureWebpack: {
        externals: {
            jquery: "jQuery",
            $: "jQuery",
        }
    },
    pwa: {
        name: "Resido",
        themeColor: "#f8fafc",
        assetsVersion: "3",
        manifestOptions: {},
        workboxOptions: {
            skipWaiting: true
        }
    },
};