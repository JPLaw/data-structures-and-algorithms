

  const fizzBuzzTree = (rootNode, cb) => {
    if (!rootNode) return undefined;
    const n = rootNode.value
    if(n % 3 && n % 5 === 0){
        rootNode.value = 'FIZZBUZZ';
    } if(n % 3 === 0) {
        rootNode.value = 'FIZZ';
    } if(n % 5 === 0) {
        rootNode.value = 'BUZZ';
    };
    
    cb(rootNode.value),

    cb(rootNode.value);
    fizzBuzzTree(rootNode.left, cb);
    fizzBuzzTree(rootNode.right, cb);
    return undefined;
  };
