// add whatever parameters you deem necessary
// function countPairs(arr, val) {
//     let pair = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             let sum = arr[i] + arr[j];
//             if (sum === val) {
//                 pair++;
//             }
//         }
//     } return pair;
// }

function countPairs(arr, value) {
    arr.sort((a, b) => a - b);
    let left = 0;
    let right = arr.length - 1;
    let pair = 0, sum = 0;

    while (left < right) {
        sum = arr[left] + arr[right];
        if (sum === value) {
            pair++;
            left++;
            right--;
        }
        else if (sum < value) {
            left++;
        }
        else {
            right--;
        }
    }
    return pair;
}