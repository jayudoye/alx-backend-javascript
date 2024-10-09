export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter((student) => student.location === city);
  return filteredStudents.map((student) => (
    { ...student, ...{ grade: (newGrades.find((obj) => obj.studentId === student.id) || { grade: 'N/A' }).grade } }
  ));
}
