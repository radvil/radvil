/**
 * Checks if a given value is a non-empty array.
 *
 * @param {unknown} value - The value to be checked.
 * @returns {boolean} - Returns `true` if the value is an array and not empty, otherwise `false`.
 *
 * @example
 * // returns true
 * isNotEmptyArray([1, 2, 3]);
 *
 * @example
 * // returns false
 * isNotEmptyArray([]);
 *
 * @example
 * // returns false
 * isNotEmptyArray({});
 */
export function isNotEmptyArray(value: unknown): boolean {
  return !!value && Array.isArray(value) && value.length > 0;
}
