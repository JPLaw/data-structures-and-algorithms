'use strict';

const hashOne = [
  {'angry': 'mad'},
  {'calm': 'peaceful'},
  {'brave': 'daring'},
  {'think': 'consider'},
];

const hashTwo = [
  {'angry': 'mild'},
  {'calm': 'agitated'},
  {'brave': 'cowardly'},
  {'think': 'disregard'},
];

function leftJoin(hashOne, hashTwo) {
  let map = {};
  for (let i = 0; i < hashOne.length; i++) {
    map[Object.keys(hashOne[i])] = [Object.values(hashOne[i]).toString(), null];
  }
  for (let j = 0; j < hashOne.length; j++) {
    if (map[Object.keys(hashTwo[j])]) {
      map[Object.keys(hashTwo[j])][1] = Object.values(hashTwo[j]).toString();
    }
  }
  return map;
}

const output = leftJoin(hashOne, hashTwo);
