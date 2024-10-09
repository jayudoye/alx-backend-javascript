export default function createInt8TypedArray(length, position, value) {
  // Check if position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create a DataView to work with the buffer
  const dataView = new DataView(buffer);

  // Set the Int8 value at the specified position
  dataView.setInt8(position, value);

  return dataView;
}
