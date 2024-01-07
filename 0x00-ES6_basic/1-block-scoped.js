export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    task = true;    // No 'var' redeclaration, just assignment
    task2 = false;   // No 'var' redeclaration, just assignment
  }

  return [task, task2];
}
