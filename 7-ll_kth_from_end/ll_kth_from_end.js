'use strict';

const llKthFromEnd = (list, k) => {
  if (!list) {
    return null;
  }
  
  let length = 0;
  let current = list;
  while (current) {
    current = current.next;
    length++;
  }
  
  if (length <= k) return null;
  const kth = length - k;
  let element = '';
  current = list;
  
  for (let i = 1; i < kth; i++) {
    element = current.next.value;
    current = current.next;
  }
  return element;
};