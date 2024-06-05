const fs = require('fs');

function countStudents(path) {
  try {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        throw new Error('Cannot load the database');
      }
      const students = data.split('\n').slice(1).map((line) => line.split(','));
      const studentsByField = {};
      for (const student of students) {
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
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
