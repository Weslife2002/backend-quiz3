import Scale from './Scale.js';

function weighTwoTimes(scale) {
  const group1 = [0, 1, 2, 3];
  const group2 = [4, 5, 6, 7];
  const group3 = [8, 9, 10, 11];
  const firstTimeResult = scale.weigh(group1, group2);
  let secondTimeResult;
  let faultGroup;
  let heavier;
  if (firstTimeResult === 1) {
    secondTimeResult = scale.weigh(group1, group3);
    if (secondTimeResult === 1) {
      heavier = true;
      faultGroup = group1;
    } else {
      heavier = false;
      faultGroup = group2;
    }
  } else if (firstTimeResult === 3) {
    secondTimeResult = scale.weigh(group2, group3);
    if (secondTimeResult === 1) {
      heavier = true;
      faultGroup = group2;
    } else {
      heavier = false;
      faultGroup = group1;
    }
  } else {
    faultGroup = group3;
    heavier = (scale.weigh(group3, group1) === 1);
  }
  return { faultGroup, heavier };
}

function weightLastTwo(scale, faultGroup, heavier) {
  const thirdTimeResult = scale.weigh([faultGroup[0]], [faultGroup[1]]);
  if (heavier) {
    if (thirdTimeResult === 1) {
      return faultGroup[0];
    }
    if (thirdTimeResult === 3) {
      return faultGroup[1];
    }
    const forthTimeResult = scale.weigh([faultGroup[2]], [faultGroup[3]]);
    if (forthTimeResult === 1) {
      return faultGroup[2];
    }
    return faultGroup[3];
  }
  if (thirdTimeResult === 1) {
    return faultGroup[1];
  }
  if (thirdTimeResult === 3) {
    return faultGroup[0];
  }
  const forthTimeResult = scale.weigh([faultGroup[2]], [faultGroup[3]]);
  if (forthTimeResult === 1) {
    return faultGroup[3];
  }
  return faultGroup[2];
}

function findFaultCoin(scale) {
  const { faultGroup, heavier } = weighTwoTimes(scale);
  const faultIndex = weightLastTwo(scale, faultGroup, heavier);
  return { faultIndex, heavier };
}
let testCaseFails = 0;

for (let i = 0; i < 1000; i += 1) {
  const scale = new Scale();
  const { faultIndex, heavier } = findFaultCoin(scale);
  testCaseFails += !scale.checkResult(faultIndex, heavier);
}

console.log(`You failed ${testCaseFails} test cases`);
