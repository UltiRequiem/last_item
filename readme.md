# Last Item

Get the last N items of an array or just the last one, faster than

[![npm](https://img.shields.io/npm/v/@ultirequiem/last-item?logo=npm&color=cb3837)](https://www.npmjs.com/package/@ultirequiem/last-item)
[![npm downloads](https://img.shields.io/npm/dm/@ultirequiem/last-item?color=cb3837)](https://www.npmjs.com/package/@ultirequiem/last-item)
[![CI](https://github.com/UltiRequiem/last_item/actions/workflows/ci.yaml/badge.svg)](https://github.com/UltiRequiem/last_item/actions/workflows/ci.yaml)
[![codecov](https://codecov.io/gh/UltiRequiem/last_item/graph/badge.svg)](https://codecov.io/gh/UltiRequiem/last_item)

[`Array.prototype.slice`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)/[`Array.prototype.at`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/at).

## Install

```sh
npm install @ultirequiem/last-item
```

## Usage

ESM only, types included: the same import works in Node.js, Bun and browsers.

```javascript
import { lastItem } from "@ultirequiem/last-item";

const numbers = [1, 2, 3, 4, 5];

lastItem(numbers); //=> 5

lastItem(numbers, 3); //=> [3, 4 , 5]
```

## Alternatives

This is a utility module, which focuses on being faster than its native
counterparts and similar modules.

In the vast majority of cases you should prefer `Array.prototype.slice` or
`Array.prototype.at` if performance is not an issue.

### Get Last Array Item

```javascript
const abc = ["a", "b", "c"];

lastItem(abc); //=> "c"

abc.at(-1); //=> "c"
```

### Get N Last Array Items

```javascript
const animals = ["Tiger", "Horse", "Lion"];

lastItem(animals, 2); //=> ["Horse", "Lion"]

animals.splice(-2); //=> ["Horse", "Lion"]
```

### Similar Modules

#### [array-last](https://github.com/jonschlinkert/array-last)

This module is also quite fast, so I am including it as an alternative, I must
mention that it has some bugs and open pull requests for several years and there
seems to be no activity.

The biggest drawback of this module in my opinion is the poor error handling and
it's strange behavior, here are some things I noticed.

- [If you send an empty array it will return null](https://github.com/jonschlinkert/array-last/blob/master/index.js#L16)

> This module would throw a `RangeError`

- [If you send a parameter that is not a number as length it will be changed to
  `1`](https://github.com/jonschlinkert/array-last/blob/master/index.js#L20)

> This module would throw a `TypeError`

- [If you send a number larger than the length of the array, the array will be filled with `undefined`.](https://github.com/jonschlinkert/array-last/issues/6)

```javascript
last(["a", "b", "c"], 4); //=> [ undefined, 'a', 'b', 'c' ]
```

> This module would throw a `RangeError`

- [Does not handle if you send a negative number as expected length.](https://github.com/jonschlinkert/array-last/issues/10)

> This module would throw a `RangeError`

## Benchmarks

Check the benchmark code on `bench.ts` ⚡

```
benchmark       time (avg)             (min … max)       p75       p99      p995
-------------------------------------------------- -----------------------------
Slice        44.75 ns/iter  (39.73 ns … 801.56 ns)  42.69 ns  79.87 ns  80.45 ns
At           81.23 ns/iter  (79.83 ns … 104.44 ns)  81.35 ns  94.27 ns  94.68 ns
Array Last   13.93 ns/iter   (13.65 ns … 29.26 ns)   13.7 ns  15.01 ns  15.38 ns
Last Item    14.21 ns/iter    (12.7 ns … 19.77 ns)  14.87 ns  15.37 ns  15.51 ns
```

> Version 0.1.2

Benchmarks are run on GitHub Actions on each commit, you can see the latest runs
[here](https://github.com/UltiRequiem/last_item/actions/workflows/benchmark.yaml).

## Support

Open an Issue, I will check it as soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Don't forget to star the repo ⭐

## Authors

[Eliaz Bobadilla](https://ultirequiem.com) - Creator and Maintainer 💪

See also the full list of
[contributors](https://github.com/UltiRequiem/last_item/contributors) who
participated in this project ✨

## Versioning

We use [Semantic Versioning](http://semver.org). For the versions available, see
the [tags](https://github.com/UltiRequiem/last_item/tags) 🏷️

## Licence

Licensed under the MIT License 📄
