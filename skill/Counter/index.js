/**
 * Intersection ([1,2,3],[5,16,1,3]) should return [1,3]
 */

/**
 * 方法 1
 * o(n*m)
 */
let arr1 = [15, 3, 6, 8, 24, 16];
let arr2 = [11, 3, 9, 6, 15, 8];

function Intersection1(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let t = 0; t < arr2.length; i++) {
      if (arr1[i] === arr2[t]) {
        console.log("arr1[i]", arr1[i], i);
        console.log("arr2[t]", arr2[t], t);
        result.push(arr1[i]);
      }
    }
  }
  console.log("result", result);
  return result;
}

Intersection1(arr1, arr2);

/**
 * 方法2 使用 counter，把兩個陣列的元素遍歷，在 counter object 中 記下一個元素出現幾次
 * o(n+m)
 */
function Intersection(arr1, arr2) {
  let result = [];
  let arr3 = arr1.concat(arr2);
  let counter = {};
  for (let i = 0; i < arr3.length; i++) {
    if (!counter[arr3[i]]) {
      counter[arr3[i]] = 1;
    } else {
      counter[arr3[i]]++;
    }
  }
  for (let property in counter) {
    if (counter[property] >= 2) {
      result.push(property);
    }
  }
  console.log("result", result);
  return result;
}

Intersection([1, 2, 3, 7, 9, 19, 25], [19, 5, 16, 10, 25]);
