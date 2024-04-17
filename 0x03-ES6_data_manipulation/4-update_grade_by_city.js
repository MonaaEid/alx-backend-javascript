function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    if (student.city === city) {
      return {
        ...student,
        grades: newGrades,
      };
    }
    return student;
  });
}
