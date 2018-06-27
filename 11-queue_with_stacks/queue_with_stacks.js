let Stack1 = [];
let Stack2 = [];

function enqStack(element) {
  Stack1.push(element);
}

function deqStack() {
  if (Stack2.length === 0) {
    if (Stack1.length === 0) { 
       return undefined // queue would be empty
    };
    while (Stack1.length > 0) {
      var p = Stack1.pop();
      Stack2.push(p);
    }
  }
  return Stack2.pop();
}

