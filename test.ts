import { lastItem } from "./mod.ts";

import { assertEquals } from "https://deno.land/std@0.135.0/testing/asserts.ts";

Deno.test("lastItem", () => {
  const numbers = [1, 2, 3, 4, 5] as const;

  assertEquals(5, lastItem(numbers));

  assertEquals([3, 4, 5], lastItem(numbers, 3));

  assertEquals(numbers, lastItem(numbers, numbers.length));
});
