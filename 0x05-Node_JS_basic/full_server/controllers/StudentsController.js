const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        const msg = 'This is the list of our students\n';
        const students = [];
        for (const [key, value] of Object.entries(data)) {
          students.push(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
        }
        response.write(msg);
        response.write(students.join('\n'));
        response.end();
      })
      .catch((error) => {
        response.write('This is the list of our students\n');
        response.end(error.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        const students = data[request.params.major];
        if (students) {
          response.write(`List of students in ${request.params.major}: ${students.join(', ')}`);
          response.end();
        } else {
          response.write('Major parameter must be CS or SWE\n');
          response.end();
        }
      })
      .catch((error) => {
        response.write('This is the list of our students\n');
        response.end(error.message);
      });
  }
}

module.exports = StudentsController;
