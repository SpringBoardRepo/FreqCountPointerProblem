// add whatever parameters you deem necessary
function twoArrayObject(keyArray, valueArray) {
    return keyArray.reduce((obj, cur, idx) => {
        obj[cur] = idx < valueArray.length ? valueArray[idx] : null;
        return obj;
    }, {});
}
