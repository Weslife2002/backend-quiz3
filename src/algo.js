import Scale from './Scale.js';

function handleTwoGroup(scale, heavierGroup, lighterGroup) {
  // Handle 2 groups of 3 coins each
  const group1 = [heavierGroup[0], lighterGroup[0], lighterGroup[1]];
  const group2 = [heavierGroup[1], lighterGroup[2], lighterGroup[3]];
  const secondTimeResult = scale.weigh(group1, group2);
  if (secondTimeResult === 1) {
    return handleThreeCoinFromDifferentGroups(
      scale,
      lighterGroup[2],
      lighterGroup[3],
      heavierGroup[0],
    );
  }
  if (secondTimeResult === 3) {
    return handleThreeCoinFromDifferentGroups(
      scale,
      lighterGroup[0],
      lighterGroup[1],
      heavierGroup[1],
    );
  }
  if (scale.weigh([heavierGroup[2]], [heavierGroup[3]]) === 1) {
    return { faultIndex: heavierGroup[2], heavier: true };
  }
  return { faultIndex: heavierGroup[3], heavier: true };
}

function handleThreeCoinFromDifferentGroups(scale, lighterIndex1, lighterIndex2, heavierIndex) {
  if (scale.weigh([lighterIndex1], [lighterIndex2]) === 1) {
    return { faultIndex: lighterIndex2, heavier: false };
  }
  if (scale.weigh([lighterIndex1], [lighterIndex2]) === 3) {
    return { faultIndex: lighterIndex1, heavier: false };
  }
  return { faultIndex: heavierIndex, heavier: true };
}

function handleThreeCoin(scale, faultGroup, heavier) {
  const finalWeighResult = scale.weigh([faultGroup[0]], [faultGroup[1]]);
  if (finalWeighResult === 1 && heavier) {
    return faultGroup[0];
  }
  if (finalWeighResult === 3 && heavier) {
    return faultGroup[1];
  }
  if (finalWeighResult === 1 && !heavier) {
    return faultGroup[1];
  }
  if (finalWeighResult === 3 && !heavier) {
    return faultGroup[0];
  }
  return faultGroup[2];
}

function findFaultCoin(scale) {
  const group1 = [0, 1, 2, 3];
  const group2 = [4, 5, 6, 7];
  const group3 = [8, 9, 10, 11];
  const firstTimeResult = scale.weigh(group1, group2);
  if (firstTimeResult === 2) {
    const secondTimeResult = scale.weigh(group3.slice(0, 3), group1.slice(0, 3));
    if (secondTimeResult === 2) {
      if (scale.weigh([group3[3]], [group1[3]]) === 1) {
        return { faultIndex: 11, heavier: true };
      }
      return { faultIndex: 11, heavier: false };
    }
    if (secondTimeResult === 1) {
      return { faultIndex: handleThreeCoin(scale, group3.slice(0, 3), true), heavier: true };
    }
    return { faultIndex: handleThreeCoin(scale, group3.slice(0, 3), false), heavier: false };
  }
  if (firstTimeResult === 1) {
    return handleTwoGroup(scale, group1, group2);
  }
  return handleTwoGroup(scale, group2, group1);
}

export {
  findFaultCoin,
  handleTwoGroup,
  handleThreeCoinFromDifferentGroups,
  handleThreeCoin,
};
