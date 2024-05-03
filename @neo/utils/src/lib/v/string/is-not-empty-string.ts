/**
 * Type guard function that checks if a given value is a non-empty string.
 *
 * @param {unknown} value - The value to be checked.
 * @returns {boolean} - Returns `true` if the value is a string and not empty, otherwise `false`.
 * 
 * @example
 * // returns true
 * isNotEmptyString("hello");
 * 
 * @example
 * // returns false
 * isNotEmptyString("");
 * 
 * @example
 * // returns false
 * isNotEmptyString(123);
 */
export function isNotEmptyString(value: unknown): value is string {
  return !!value && typeof value === "string";
}
