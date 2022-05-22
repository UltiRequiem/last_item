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

One of the biggest advantages of this module is also that it is packaged to be
easy to use in various environments such as Node.js, Deno or the Browser.

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
