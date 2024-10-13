export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    // eslint disabled line of code
    const value = array.indexOf(idx);
    array[value] = appendString + idx;
  }

  return array;
}
