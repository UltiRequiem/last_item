import { lastItem } from "./mod.ts";

import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.140.0/testing/asserts.ts";

Deno.test("lastItem", () => {
  const numbers = [1, 2, 3, 4, 5] as const;

  assertEquals(5, lastItem(numbers));

  assertEquals([3, 4, 5], lastItem(numbers, 3));

  assertEquals(numbers, lastItem(numbers, numbers.length));

  assertThrows(() => {
    lastItem([]);
  });

  assertThrows(() => {
    // @ts-ignore: It should throw
    lastItem("");
  });

  assertThrows(() => {
    // @ts-ignore: It should throw
    lastItem(numbers, "hello");
  });

  assertThrows(() => {
    lastItem(numbers, numbers.length + 10);
  });
});
