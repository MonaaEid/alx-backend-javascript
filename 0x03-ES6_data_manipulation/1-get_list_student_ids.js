export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const arr = students.map((item) => item.id);
  return arr;
}
