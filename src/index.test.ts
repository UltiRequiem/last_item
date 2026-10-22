import { expect, it } from "vitest";
import { lastItem } from "./index.js";

const numbers = [1, 2, 3, 4, 5];

it("lastItem", () => {
  expect(5).toEqual(lastItem(numbers));

  expect([3, 4, 5]).toEqual(lastItem(numbers, 3));

  expect(numbers).toEqual(lastItem(numbers, numbers.length));

  expect(() => {
    lastItem([]);
  }).toThrow();

  expect(() => {
    // @ts-ignore: It should throw
    lastItem("");
  }).toThrow();

  expect(() => {
    // @ts-ignore: It should throw
    lastItem(numbers, "hello");
  }).toThrow();

  expect(() => {
    lastItem(numbers, numbers.length + 10);
  }).toThrow();
});
