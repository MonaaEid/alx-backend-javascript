function updateStudentGradeByCity(students, city, newGrades) {
  const arrByCity = students.filter((item) => item.location === city);
  const arrByGrade = arrByCity.map((item) => {
    const output = item;
    const grade = newGrades.find((grade) => grade.studentId === item.id);
    if (grade) {
      output.grade = grade.grade;
    } else {
      output.grade = 'N/A';
    }
    return output;
  });
  return arrByGrade;
}
