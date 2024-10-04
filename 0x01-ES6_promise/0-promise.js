export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve(true);
    reject(new Error('Error'));
  });
}
