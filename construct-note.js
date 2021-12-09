// add whatever parameters you deem necessary
function freqCounter(str) {
    let obj = {};
    for (let char of str) {
        obj[char] = (obj[char] + 1) || 1;
    }
    return obj;
}

function constructNote(msg, letters) {

    if (msg === "") return true;
    let message = freqCounter(msg);
    let l = freqCounter(letters);

    for (let key of Object.keys(message)) {
        if (message[key] <= l[key]) {
            return true;
        }
    }
    return false;
}
