export const ascendingStanding = (studentArray) => {
  if (studentArray.length <= 1) {
    return studentArray;
  }
  let pivot = studentArray[0];
  let lesserArray = [];
  let greaterArray = [];

  for (let i = 1; i < studentArray.length; i++) {
    if (studentArray[i].sgpa <= pivot.sgpa) {
      lesserArray.push(studentArray[i]);
    } else {
      greaterArray.push(studentArray[i]);
    }
  }

  return [
    ...ascendingStanding(lesserArray),
    pivot,
    ...ascendingStanding(greaterArray),
  ];
};
export const descendingStanding = (studentArray) => {
  if (studentArray.length <= 1) {
    return studentArray;
  }

  let pivot = studentArray[0];
  let lesserArray = [];
  let greaterArray = [];

  for (let i = 1; i < studentArray.length; i++) {
    if (studentArray[i].sgpa >= pivot.sgpa) {
      lesserArray.push(studentArray[i]);
    } else {
      greaterArray.push(studentArray[i]);
    }
  }

  return [
    ...descendingStanding(lesserArray),
    pivot,
    ...descendingStanding(greaterArray),
  ];
};
