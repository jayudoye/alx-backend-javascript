export default function createIteratorObject(report) {
  return [].concat(...Object.values(report.allEmployees));
}
