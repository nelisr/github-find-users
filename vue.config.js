process.env.VUE_APP_VERSION = require("./package.json").version;

module.exports = {
  pwa: {
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js",
      exclude: [/\.map$/, /manifest\.json$/]
    }
  },
};
