# Last Item

[![codecov](https://codecov.io/gh/ultirequiem/fibonacci.js/branch/main/graph/badge.svg)](https://codecov.io/gh/ultirequiem/fibonacci.js)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/fibonacci/mod.ts)

Compute the
[Fibonacci Succession](https://en.wikipedia.org/wiki/Fibonacci_number) and NTH
Fibonacci Number.

## Usage

The API is the same on all this platforms ✔️

### [Deno 🦕](https://deno.land/x/fibonacci)

```javascript
import {
  fibonacci,
  fibonacciSequence,
} from "https://deno.land/x/fibonacci/mod.ts";

fibonacci(10); //=> 55

fibonacci(5); //=> 5

// First 10 Fibonacci Numbers
for (const fiboNumber of fibonacciSequence(9)) {
  console.log(fiboNumber);
}

console.log(`My favorites numbers are ${[...fibonacciSequence(3)]}.`);
//=> "My favorites numbers are 0,1,1,2."
```

### [Node.js 🐢🚀](https://npmjs.com/package/@ultirequiem/fibonacci)

```javascript
import { fibonacci, fibonacciSequence } from "@ultirequiem/fibonacci";
```

### [Browser 🌐](https://developer.mozilla.org/en-US/docs/Glossary/Browser)

You can use any [CDN](https://en.wikipedia.org/wiki/Content_delivery_network) 🔥

Eg 👉
[ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) ↔️
[SkyPack](https://cdn.skypack.dev/@ultirequiem/random-item) 🆚
[Script Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
↔️ [JSDelivr](https://cdn.jsdelivr.net/npm/@ultirequiem/random-item)

## Documentation

Is hosted on
[Deno Doc](https://doc.deno.land/https://deno.land/x/fibonacci/mod.ts) 📄

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
[contributors](https://github.com/UltiRequiem/fibonacci.js/contributors) who
participated in this project ✨

## Versioning

We use [Semantic Versioning](http://semver.org). For the versions available, see
the [tags](https://github.com/UltiRequiem/fibonacci.js/tags) 🏷️

## Licence

Licensed under the MIT License 📄
