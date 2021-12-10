// add whatever parameters you deem necessary
function averagePair(arr, value) {

    let left = 0;
    let right = arr.length - 1;
    let avg = 0;

    while (left < right) {
        avg = (arr[left] + arr[right]) / 2;
        if (avg === value) {
            left++;
            right--;
            return true;
        }
        else if (avg < value) {
            left++;
        }
        else {
            right--;
        }
    }
    return false;
}
