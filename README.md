# parcel-optimizer-javascript-obfuscator

Optimizer plugin for [ParcelJS](https://parceljs.org) v2 to obfuscate JavaScript
files using
[javascript-obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator).
This plugin is based on
[`jabuco/parcel-plugin-obfuscate`](https://github.com/jabuco/parcel-plugin-obfuscate),
which as of this writing, is not compatible with ParcelJS v2.

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

## Usage with ParcelJS

Include the plugin in your [`.parcelrc`](https://parceljs.org/features/plugins/#optimizers).

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
