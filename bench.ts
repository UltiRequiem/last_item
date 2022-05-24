import { lastItem } from "./mod.ts";

import arrayLast from "https://esm.sh/array-last@1.3.0";

const exampleArray = Array.from({ length: 9e7 });

Deno.bench("Last item [lastItem]", { group: "Single Item" }, () => {
  lastItem(exampleArray);
});

Deno.bench("Last item [Array.prototype.at]", { group: "Single Item" }, () => {
  exampleArray.at(-1);
});

Deno.bench("Last item [arrayLast]", { group: "Single Item" }, () => {
  arrayLast(exampleArray);
});

Deno.bench("Last item [Direct Indexing]", { group: "Single Item" }, () => {
  exampleArray[exampleArray.length - 1];
});

Deno.bench(
  "Last Multiple Items [lastItem]",
  { group: "Multiple Items" },
  () => {
    lastItem(exampleArray, 10);
  },
);

Deno.bench(
  "Last Multiple Items [Array.prototype.slice]",
  { group: "Multiple Items" },
  () => {
    exampleArray.slice(10);
  },
);

Deno.bench(
  "Last Multiple Items [arrayLast]",
  { group: "Multiple Items" },
  () => {
    arrayLast(exampleArray, 10);
  },
);
