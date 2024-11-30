const fs = require('fs').promises;

/**
 * Count the number of students in the given file
 * @param {String} path - path to the file to read
 * @returns {Promise} A promise that resolves with the result or rejects with an error
 */
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');

    const students = data.split('\n');
    // remove headers
    students.shift();
    // remove empty lines at the end of the file
    let i = students.length - 1;
    while (students[i] === '') {
      students.pop();
      i -= 1;
    }
    const numStudents = students.length;
    console.log(`Number of students: ${numStudents}`);

    const studentsByField = {};
    for (const student of students) {
      const studentData = student.split(',');
      const firstName = studentData[0];
      const field = studentData[3];

      if (field in studentsByField) {
        studentsByField[field].push(firstName);
      } else {
        studentsByField[field] = [firstName];
      }
    }

    for (const field in studentsByField) {
      if (field in studentsByField) {
        const fieldStudents = studentsByField[field];
        const numFieldStudents = fieldStudents.length;
        console.log(
          `Number of students in ${field}: ${numFieldStudents}. List: ${fieldStudents.join(', ')}`,
        );
      }
    }

    return studentsByField;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
