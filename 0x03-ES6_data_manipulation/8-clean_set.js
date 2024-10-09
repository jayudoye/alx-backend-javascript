export default function cleanSet(set, startString) {
  // Filter set values that start with the specified string
  const filteredValues = Array.from(set).filter((value) => typeof value === 'string' && value.startsWith(startString));

  // Join the filtered values into a single string separated by '-'
  const res = filteredValues.map((obj) => obj.slice(startString.length));
  return typeof startString === 'string' && startString.length ? res.join('-') : '';
}
