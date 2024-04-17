export default function updateUniqueItems() {
    const map = new Map([
        ['Guava', 21],
        ['Pomelo', 22],
        ['Pineapple', 19],
        ['Mango', 17],
    ]);
    
    map.set('Pineapple', map.get('Pineapple') + 1);
    map.set('Raspberry', 40);
    
    return map;
}