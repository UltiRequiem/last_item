import { lastItem } from "./mod.ts";

import arrayLast from "https://esm.sh/array-last@1.3.0";

const exampleArray = Array.from({ length: 9e7 });

Deno.bench("Slice", () => {
  exampleArray.slice(exampleArray.length - 1);
});

Deno.bench("At", () => {
  exampleArray.at(-1);
});

Deno.bench("Array Last", () => {
  arrayLast(exampleArray);
});

Deno.bench("Last Item", () => {
  lastItem(exampleArray);
});
