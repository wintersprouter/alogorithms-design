/**
 * o(n^2)
 * @param {*} arr
 * @param {*} avg
 */

function averagePair1(arr, avg) {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[j] + arr[i]) / 2 === avg) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  f;
  console.log(result);
}
averagePair1([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);

/**
 * pointer solution
 * o(n)
 * @param {*} arr
 * @param {*} avg
 */

function averagePair(arr, avg) {
  //分別在 array 兩端提供左跟右的pointer
  let left = 0;
  let right = arr.length - 1;
  let result = [];
  while (left < right) {
    //根據左右座標的平均決定座標的移動
    let temp_average = arr[left] + arr[right];
    if (temp_average > avg) {
      right--;
    } else if (temp_average < avg) {
      left++;
    } else if (temp_average === avg) {
      result.push([arr[i], arr[j]]);
      left++;
      right--;
    }
  }
  console.log(result);
}
averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);
