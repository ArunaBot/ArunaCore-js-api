## [1.0.0-BETA.7]

### Changed
- Added readme file with basic usage instructions and API overview.

## [1.0.0-BETA.6]

### Changed
- **API relicensed to Apache License 2.0**
  - The ArunaCore API has been split from the core engine and is now maintained in a separate repository.
  - As part of this split, the API has been relicensed from GNU GPL v3.0 to Apache License 2.0.
  - The main ArunaCore repository and core engine remain licensed under GNU GPL v3.0.
  - This change aims to make the API easier to integrate with external projects and foster a more flexible ecosystem, without compromising the free and open nature of the core.
  - See the full discussion and contributor consent process in: https://github.com/ArunaBot/ArunaCore/issues/10
- Updated internal dependencies.

### Fixed
- Reconnection logic now works correctly, allowing the API to automatically reconnect when the connection to the server is lost.
