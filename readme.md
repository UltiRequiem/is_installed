# is_installed

Check if a binary is installed.

[![npm](https://img.shields.io/npm/v/@ultirequiem/is-installed?logo=npm&color=cb3837)](https://www.npmjs.com/package/@ultirequiem/is-installed)
[![npm downloads](https://img.shields.io/npm/dm/@ultirequiem/is-installed?color=cb3837)](https://www.npmjs.com/package/@ultirequiem/is-installed)
[![CI](https://github.com/UltiRequiem/is_installed/actions/workflows/ci.yaml/badge.svg)](https://github.com/UltiRequiem/is_installed/actions/workflows/ci.yaml)
[![codecov](https://codecov.io/gh/UltiRequiem/is_installed/graph/badge.svg)](https://codecov.io/gh/UltiRequiem/is_installed)

## Install

```sh
npm install @ultirequiem/is-installed
```

## Usage

ESM only, types included: the same import works in Node.js, Bun and browsers.

```javascript
import { isInstalled } from "@ultirequiem/is-installed";

await isInstalled("ls"); //=> true
await isInstalled("non-existing-command"); //=> false
```

## Versioning

We use [Semantic Versioning](http://semver.org). For the versions available, see
the [tags](https://github.com/UltiRequiem/is_installed/tags) 🏷️

## Licence

MIT License 📄
