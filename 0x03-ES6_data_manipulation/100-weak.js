// Define and export a const instance of WeakMap
export const weakMap = new WeakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
  // Check if the weakMap has an entry for the endpoint
  if (!weakMap.has(endpoint)) {
    // If not, initialize the count for the endpoint to 1
    weakMap.set(endpoint, 1);
  } else {
    // If yes, increment the count for the endpoint
    const currentCount = weakMap.get(endpoint);
    weakMap.set(endpoint, currentCount + 1);

    // Check if the number of queries is >= 5
    if (currentCount + 1 >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}
