/*!
 * Last Item <https://github.com/ultirequiem/last_item>
 *
 * Copyright (c) Eliaz Bobadilla.
 * Released under the MIT License.
 */

/**/
export function lastItem<T>(array: readonly T[]): T;
export function lastItem<T>(array: readonly T[], length: number): T[];
export function lastItem<T>(array: readonly T[], length = 1) {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array.");
  }

  let index = array.length;

  if (index <= 0) {
    throw new RangeError("Expected an array with at least one item.");
  }

  if (length === 1) {
    return array[index - 1];
  }

  if (!Number.isInteger(length)) {
    throw new TypeError("Expected an integer.");
  }

  if (length > index) {
    throw new RangeError("More items were requested than there are.");
  }

  if (length === index) {
    return array;
  }

  const result = [];

  while (length--) {
    result[length] = array[--index];
  }

  return result;
}
