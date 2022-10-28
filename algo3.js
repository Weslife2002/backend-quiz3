import Scale from './Scale.js';
function handleThreeCoin(scale, faultGroup, heavier) {
  const fourthTimeResult = scale.weigh([faultGroup[0]], [faultGroup[1]]);
  if (fourthTimeResult === 3) {
    if (heavier) {
      return faultGroup[0];
    }
    return faultGroup[1];
  }
  if (fourthTimeResult === 1) {
    if (heavier) {
      return faultGroup[1];
    }
    return faultGroup[0];
  }
  return faultGroup[2];
}

function findFaultCoin(scale) {
  const group1 = [0, 1, 2];
  const group2 = [3, 4, 5];
  const group3 = [6, 7, 8];
  const group4 = [9, 10, 11];
  const threeTimesResult = [
    scale.weigh(group1, group2),
    scale.weigh(group1, group3),
    scale.weigh(group1, group4),
  ];
  const group1Fault = threeTimesResult.every(x => x !== 2);
  if (group1Fault) {
    const heavier = threeTimesResult.some(x => x === 3);
    return handleThreeCoin(scale, group1, heavier);
  }
  const heavier = threeTimesResult.some(x => x === 1);
  if (threeTimesResult[0] !== 2) {
    return handleThreeCoin(scale, group2, heavier);
  }
  if (threeTimesResult[1] !== 2) {
    return handleThreeCoin(scale, group3, heavier);
  }
  return handleThreeCoin(scale, group4, heavier);
}

let faultCount = 0;
for (let count = 0; count < 1000; count += 1) {
  const scale = new Scale();
  const { faultIndex, heavier } = findFaultCoin(scale);
  faultCount += scale.checkResult(faultIndex, heavier);
}

console.log(faultCount);
