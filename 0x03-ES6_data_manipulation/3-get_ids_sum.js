export default function getStudentIdsSum(students) {
  const ids = students.map((student) => student.id);
  return ids.reduce((prev, current) => prev + current, 0);
}
