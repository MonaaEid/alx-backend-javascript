export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees).flat();
  const result = [];
  for (const employee of employees) {
    result.push(employee);
  }

  return result;
}
