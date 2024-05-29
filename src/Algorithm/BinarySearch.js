const BinarySearch = (arr, searchNumber) => {
  arr.sort((a, b) => a.sgpa - b.sgpa);

  let left = 0;
  let right = arr.length - 1;
  let indices = [];

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid].sgpa === searchNumber) {
      indices.push(mid);
      let i = mid - 1;
      while (i >= 0 && arr[i].sgpa === searchNumber) {
        indices.push(i);
        i--;
      }
      i = mid + 1;
      while (i < arr.length && arr[i].sgpa === searchNumber) {
        indices.push(i);
        i++;
      }
      return indices;
    } else if (arr[mid].sgpa < searchNumber) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

export default BinarySearch;
