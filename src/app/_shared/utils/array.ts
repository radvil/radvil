/**
 * 
 * @desc validate input is of type (array of string | number | boolean) and not empty
 */
export function isNotEmptyArray(value: any): boolean {
  return !!value && Array.isArray(value) && value.length > 0;
}
