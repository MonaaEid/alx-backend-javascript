export default function cleanSet(set, startString) {
  const newSet = new Set([...set].map((value) => {
    if (value.startsWith(startString) && typeof value === 'string') {
      return value.slice(startString.length);
    }
    return '';
  }));
  return Array.from(newSet).join('-');
}

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
