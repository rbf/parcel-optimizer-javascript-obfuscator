# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.2] - 2022-02-11

### Fixed

- Explicitly add `@parcel/plugin` dependency to `package.json`
  as suggested by the following warning:

  ```
  console: (node:1820) [MODULE_NOT_FOUND] Error:
  @rbf/parcel-optimizer-javascript-obfuscator tried to access @parcel/plugin,
  but it isn't declared in its dependencies; this makes the require call
  ambiguous and unsound.
  ```

  Note that its version is unpinned on purpose (i.e. version requirement in
  `package.json` is `^2.3.1` instead of `2.3.1`) to avoid having to release in
  sync with Parcel.

## [0.2.1] - 2022-02-10

### Fixed

- Specify `package.json#engines.parcel` as per the [Parcel
  documentation](https://parceljs.org/plugin-system/authoring-plugins/#engines)
  as suggested by the following warning:

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
[0.2.2]: https://github.com/rbf/parcel-optimizer-javascript-obfuscator/releases/tag/v0.2.2
