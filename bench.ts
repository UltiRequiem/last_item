import { lastItem } from "./mod.ts";
import { unsafeLastItem } from "./mod_unsafe.ts";

import arrayLast from "https://esm.sh/array-last@1.3.0";

const exampleArray = Array.from({ length: 9e7 });

Deno.bench("Last item [lastItem]", { group: "Single Item" }, () => {
  lastItem(exampleArray);
});

Deno.bench("Last item [unsafeLastItem]", { group: "Single Item" }, () => {
  unsafeLastItem(exampleArray);
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
  "Last Multiple Items [unsafeLastItem]",
  { group: "Multiple Items" },
  () => {
    unsafeLastItem(exampleArray, 10);
  },
);

Deno.bench(
  "Last Multiple Items [Array.prototype.slice]",
  { group: "Multiple Items" },
  () => {
    exampleArray.slice(-10);
  },
);

Deno.bench(
  "Last Multiple Items [arrayLast]",
  { group: "Multiple Items" },
  () => {
    arrayLast(exampleArray, 10);
  },
);

Deno.bench("All Items [lastItem]", { group: "All Items" }, () => {
  lastItem(exampleArray, exampleArray.length);
});

Deno.bench("All Items [unsafeLastItem]", { group: "All Items" }, () => {
  unsafeLastItem(exampleArray, exampleArray.length);
});

Deno.bench("All Items [Array.prototype.slice]", { group: "All Items" }, () => {
  exampleArray.slice(-exampleArray.length);
});

Deno.bench(
  "All Items [arrayLast]",
  { group: "All Items", ignore: true },
  () => {
    arrayLast(exampleArray, exampleArray.length);
  },
);
