export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);

  const view = new DataView(buffer);
  try {
    view.setInt8(position, value);
    return view;
  } catch (err) {
    throw new Error('Position outside range');
  }
}

console.log(createInt8TypedArray(10, 2, 89));
