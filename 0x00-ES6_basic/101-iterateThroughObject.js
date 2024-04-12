export default function iterateThroughObject(reportWithIterator) {
  const report = reportWithIterator();
  let result = '';

  for (const entry of report) {
    result += `${entry[0]}: ${entry[1]}\n`;
  }

  return result;
}
