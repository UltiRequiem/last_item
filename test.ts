import { lastItem } from "./mod.ts";
import { unsafeLastItem } from "./mod_unsafe.ts";

import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.146.0/testing/asserts.ts";

const numbers = [1, 2, 3, 4, 5] as const;

Deno.test("lastItem", () => {
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

Deno.test("unsafeLastItem", () => {
  assertEquals(5, unsafeLastItem(numbers));

  assertEquals([3, 4, 5], lastItem(numbers, 3));

  assertEquals(numbers, lastItem(numbers, numbers.length));
});
