export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    const value = array.indexOf(idx);
    array[idx] = appendString + value;
  }

  return array;
}
