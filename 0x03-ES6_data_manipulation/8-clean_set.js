export default function cleanSet(set, startString) {
    const newSet = [...set].filter(value => value.startsWith(startString));
    return newSet.join("-");
}


console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
