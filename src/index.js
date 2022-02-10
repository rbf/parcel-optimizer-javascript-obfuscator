const {Optimizer} = require("@parcel/plugin");
const JavaScriptObfuscator = require("javascript-obfuscator");

// DOC: https://parceljs.org/plugin-system/authoring-plugins

module.exports = new Optimizer({

  // DOC: https://parceljs.org/plugin-system/authoring-plugins/#loading-configuration
  async loadConfig({config}) {
    let javaScriptObfuscatorConfig = await config.getConfig([
      "javascript-obfuscator.config.json"
    ]);

    if (javaScriptObfuscatorConfig !== null) {
      return javaScriptObfuscatorConfig.contents;
    } else {
      return {};
    }
  },

  // DOC: https://parceljs.org/plugin-system/optimizer/
  async optimize({contents, map, bundle, config}) {

    // Don't obfuscate if shouldOptimize is false.
    if (!bundle.env.shouldOptimize) {
      return {contents, map};
    }

    // DOC: https://github.com/javascript-obfuscator/javascript-obfuscator#usage
    // SOURCE: https://github.com/jabuco/parcel-plugin-obfuscate/blob/master/src/ObfuscatePackager.js
    let obfuscatedCode = await JavaScriptObfuscator.obfuscate(
      contents,
      config
    ).getObfuscatedCode();

    return {
      contents: obfuscatedCode
    };
  }
});
