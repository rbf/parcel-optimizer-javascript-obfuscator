[![parcel v2 plugin](https://img.shields.io/badge/plugin-Parcel%20v2-f77171?style=flat-square)][plugin-in-parcel-search]
[![npm version](https://img.shields.io/npm/v/@rbf/parcel-optimizer-javascript-obfuscator.svg?style=flat-square)](https://www.npmjs.org/package/@rbf/parcel-optimizer-javascript-obfuscator)
[![npm downloads](https://img.shields.io/npm/dm/@rbf/parcel-optimizer-javascript-obfuscator.svg?style=flat-square)](http://npm-stat.com/charts.html?package=@rbf/parcel-optimizer-javascript-obfuscator)
![npms.io (final)](https://img.shields.io/npms-io/final-score/@rbf/parcel-optimizer-javascript-obfuscator?style=flat-square)




# Parcel v2 Plugin for `javascript-obfuscator`

Optimizer plugin for [Parcel v2](https://v2.parceljs.org) to obfuscate
JavaScript files using
[`javascript-obfuscator`](https://github.com/javascript-obfuscator/javascript-obfuscator).
This plugin is based on
[`jabuco/parcel-plugin-obfuscate`](https://github.com/jabuco/parcel-plugin-obfuscate),
which as of this writing is only compatible with [Parcel
v1](https://v1.parceljs.org).

## Configuration File

You can specify the
[options](https://github.com/javascript-obfuscator/javascript-obfuscator#javascript-obfuscator-options)
for `javascript-obfuscator` in a file named `javascript-obfuscator.config.json`
at the root of your project.

### Example

```json
{
    "compact": true,
    "controlFlowFlattening": false,
    "deadCodeInjection": false,
    "debugProtection": false,
    "disableConsoleOutput": false,
    "forceTransformStrings": [],
    "inputFileName": "",
    "selfDefending": false,
    "simplify": true,
    "sourceMap": false,
    "splitStrings": true,
    "splitStringsChunkLength": 10,
    "stringArray": true,
    "stringArrayCallsTransform": true,
    "stringArrayCallsTransformThreshold": 0.5,
    "stringArrayEncoding": [
      "base64",
      "rc4"
    ],
    "stringArrayIndexesType": [
        "hexadecimal-number"
    ],
    "stringArrayIndexShift": true,
    "stringArrayRotate": true,
    "stringArrayShuffle": true,
    "stringArrayWrappersCount": 1,
    "stringArrayWrappersChainedCalls": true,
    "stringArrayWrappersParametersMaxCount": 2,
    "stringArrayWrappersType": "variable",
    "stringArrayThreshold": 0.75,
    "target": "browser",
    "unicodeEscapeSequence": false
}
```

## Usage with Parcel

Include the [plugin][plugin-in-parcel-search] in your [`.parcelrc`](https://parceljs.org/features/plugins/#optimizers) and Parcel will
automatically download and install it from [npm]  when necessary.

### Example

```json
{
  "extends": "@parcel/config-default",
  "optimizers": {
    "*.js": [
      "...",
      "@rbf/parcel-optimizer-javascript-obfuscator"
    ]
  }
}
```

[npm]: https://www.npmjs.com/package/@rbf/parcel-optimizer-javascript-obfuscator
[plugin-in-parcel-search]: https://parceljs.org/plugin-browser/?type=%22optimizer%22&page=0&filter=%22%40rbf%2Fparcel-optimizer-javascript-obfuscator%22&includeOfficial=false
