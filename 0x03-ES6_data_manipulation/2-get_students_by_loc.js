export default function getStudentsByLocation(students, city) {
  const arr = students.filter((item) => item.location === city);
  return arr;
}
