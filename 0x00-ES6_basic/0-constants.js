let taskFirst = function taskFirst() {
    var task = 'I prefer const when I can.';
    return task;
  }
  
  export function getLast() {
    return ' is okay';
  }
  
var taskNext = function taskNext() {
    var combination = 'But sometimes let';
    combination += getLast();
  
    return combination;
  }

export { taskFirst, taskNext };
