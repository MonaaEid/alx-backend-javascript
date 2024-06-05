const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').split('\n');
    const students = data.slice(1, data.length - 1);
    const studentsByField = {};
    for (let i = 0; i < students.length; i++) {
      const student = students[i].split(',');
      if (!studentsByField[student[3]]) {
        studentsByField[student[3]] = [];
      }
      studentsByField[student[3]].push(student[0]);
    }
    console.log(`Number of students: ${students.length}`);
    for (const field in studentsByField) {
      if (field) {
        console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
