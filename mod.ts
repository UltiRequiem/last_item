/*!
 * Last Item <https://github.com/ultirequiem/last_item>
 *
 * Copyright (c) Eliaz Bobadilla.
 * Released under the MIT License.
 */

export function lastItem<T>(array: T[], items = 1) {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array.");
  }

  if (typeof items !== "number") {
    throw new TypeError("Expected a number.");
  }

  if (items === 1) {
    return array[array.length - 1];
  }

  if (array.length <= 0) {
    throw new RangeError("Expected number bigger than zero.");
  }

  if (items > array.length) {
    throw new RangeError("More items were requested than there are.");
  }

  const result = [];

  for (
    let index = array.length - 1, second = index - items;
    index >= items;
    index--, second--
  ) {
    result[second] = array[index];
  }

  return result;
}
