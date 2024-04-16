function updateStudentGradeByCity(students, city, newGrades) {
  const arrByCity = students.filter((item) => item.location === city);
  const arrByGrade = arrByCity.map((item) => {
    const output = item;
    if (item.id === newGrades.studentId) {
      output.grade = newGrades.grade;
    }
    return output;
  });
  return arrByGrade;
}
console.log(updateStudentGradeByCity(students, 'San Francisco', [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(students, 'San Francisco', [{ studentId: 5, grade: 97 }]));
