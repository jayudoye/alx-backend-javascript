export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  for (const obj of map.entries()) {
    // eslint-disable-next-line no-param-reassign
    if (obj[1] === 1) map.set(obj[0], 100);
  }
}
