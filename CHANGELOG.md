# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.1] - 2022-02-10

### Fixed

- Specify `package.json#engines.parcel` as per the [Parcel
  documentation](https://parceljs.org/plugin-system/authoring-plugins/#engines)
  to get rid of the following warning:

  ```
  @parcel/core: The plugin "@rbf/parcel-optimizer-javascript-obfuscator" needs
  to specify a `package.json#engines.parcel` field with the supported Parcel
  version range.
  ```

## [0.2.0] - 2022-02-10

### Changed

- Remove the dot at the beginning of the expected configuration file, so that
  now the configuration file has to be named
  `javascript-obfuscator.config.json`.

## [0.1.0] - 2022-02-10

### Added

- Initial version based on
  [`jabuco/parcel-plugin-obfuscate`](https://github.com/jabuco/parcel-plugin-obfuscate)
  but compatible with Parcel v2.

[0.1.0]: https://github.com/rbf/parcel-optimizer-javascript-obfuscator/releases/tag/v0.1.0
[0.2.0]: https://github.com/rbf/parcel-optimizer-javascript-obfuscator/releases/tag/v0.2.0
[0.2.1]: https://github.com/rbf/parcel-optimizer-javascript-obfuscator/releases/tag/v0.2.1
