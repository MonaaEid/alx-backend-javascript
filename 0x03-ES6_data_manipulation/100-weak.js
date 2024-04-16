export const weakMap = new WeakSet();

export default function queryAPI(endpoint) {
    weakMap.add(endpoint);
    if (weakMap.size >= 5) {
        throw new Error('Endpoint load is high');
    }
    return weakMap;
}
