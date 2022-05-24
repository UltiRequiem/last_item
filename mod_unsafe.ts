/**
 * @param array The array of items.
 *
 * @returns The Last item of the array.
 *
 * @private
 */
export function unsafeLastItem<T>(array: readonly T[]): T;
/**
 * @param array The array of items.
 * @param length The quantity of items to take.
 *
 * @returns The last N items.
 *
 * @private
 */
export function unsafeLastItem<T>(array: readonly T[], length: number): T[];
export function unsafeLastItem<T>(array: readonly T[], length = 1) {
  let index = array.length;

  if (length === 1) {
    return array[index - 1];
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
