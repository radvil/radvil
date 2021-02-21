/**
 * 
 * @desc validate input is of type string and not empty
 */
export function isNotEmptyString(value: any | null): value is string {
  return !!value && typeof value === 'string';
}

/**
 * 
 * @desc split strings to an array of strings
 * @param separator default to ", "
 * @usage splitStringToArray(values, ', ');
 */
export function splitStringToArray(stringValue: string, separator = ', '): string[] {
  return stringValue.toLowerCase().split(separator);
}