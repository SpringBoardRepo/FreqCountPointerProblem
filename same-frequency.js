// add whatever parameters you deem necessary

function sameFrequency(num1, num2) {
    let n1 = num1.toString();
    let n2 = num2.toString();
    let count1 = {};
    let count2 = {};

    for (let i = 0; i < n1.length; i++) {
        count1[n1[i]] = (count1[n1[i]] + 1) || 1;
    }

    for (let i = 0; i < n2.length; i++) {
        count2[n2[i]] = (count2[n2[i]] + 1) || 1;
    }

    for (let key of Object.keys(count1)) {
        if (count1[key] !== count2[key]) return false;
    }
    return true;
}
