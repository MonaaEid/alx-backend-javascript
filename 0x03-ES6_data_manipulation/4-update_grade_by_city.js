function updateStudentGradeByCity(students, city, newGrades) {
  const arrByCity = students.filter((item) => item.location === city);
  const arrByGrade = arrByCity.map((item) => {
    const output = { ...item };
    if (item.id === newGrades.studentId) {
      output.grade = newGrades.grade;
    }
    return output;
  });
  return arrByGrade;
}
