# Last Item

[![Code Coverage](https://codecov.io/gh/ultirequiem/last_item/branch/main/graph/badge.svg)](https://codecov.io/gh/ultirequiem/last_item)
[![Deno Doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/last_item/mod.ts)

Get the last item of an array, faster than
[`Array.prototype.slice`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)/[`Array.project.at`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/at).

## Usage

The API is the same on all this platforms ✔️

### [Deno 🦕](https://deno.land/x/last_item)

```javascript
import { lastItem } from "https://deno.land/x/last_item/mod.ts";

const numbers = [1, 2, 3, 4, 5];

lastItem(numbers); //=> 5

lastItem(numbers, 3); //=> [3, 4 , 5]
```

### [Node.js 🐢🚀](https://npmjs.com/package/@ultirequiem/last-item)

```javascript
import { lastItem } from "@ultirequiem/last-item";
```

### [Browser 🌐](https://developer.mozilla.org/en-US/docs/Glossary/Browser)

You can use any [CDN](https://en.wikipedia.org/wiki/Content_delivery_network) 🔥

Eg 👉
[ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) ↔️
[SkyPack](https://cdn.skypack.dev/@ultirequiem/random-item) 🆚
[Script Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
↔️ [JSDelivr](https://cdn.jsdelivr.net/npm/@ultirequiem/random-item)

## Alternatives

This is a utility module, which focuses on being faster than its native
counterparts and similar modules.

In the vast majority of cases you should prefer `Array.prototype.slice` or
`Array.prototype.at` if performance is not an issue.

> One of the biggest advantages of this module is also that it is packaged to be
> easy to use in various environments such as Node.js, Deno or the Browser.

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

> [Using Deno's built-in benchmark runner](https://deno.land/manual/tools/benchmarker)

```
benchmark       time (avg)             (min … max)       p75       p99      p995
-------------------------------------------------- -----------------------------
Slice        37.46 ns/iter   (33.96 ns … 83.26 ns)  36.28 ns  67.43 ns   67.8 ns
At           67.28 ns/iter   (65.89 ns … 80.11 ns)  67.43 ns  79.01 ns  79.34 ns
Array Last    11.6 ns/iter   (11.38 ns … 16.81 ns)   11.4 ns   12.7 ns  12.94 ns
Last Item    11.41 ns/iter   (11.38 ns … 15.74 ns)  11.39 ns  11.94 ns   12.1 ns
```

> Version 0.1.1

Benchmarks are run on GitHub Actions on each commit, you can see the latest runs
[here](https://github.com/UltiRequiem/last_item/actions/workflows/benchmark.yaml).

## Documentation

Is hosted on
[Deno Doc](https://doc.deno.land/https://deno.land/x/last_item/mod.ts) 📄

## Support

Open an Issue, I will check it a soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Consider [supporting me on Patreon](https://patreon.com/UltiRequiem) if you like
my work 🙏

Don't forget to start the repo ⭐

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
