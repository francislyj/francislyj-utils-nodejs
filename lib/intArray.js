
/**
 * insert data to arr
 * note: arr must be initialed
 * */
const insert = function (arr, nums) {
    for(let num of nums){
        let index = Math.ceil(num / 8) - 1;
        let remain = num % 8;
        let source = arr[index];
        source = source | 1 << remain;
        arr[index] = source;
    }
    return arr;
};

/**
 * check num is in arr
 * */
const isIn = function(arr, num){
    let index = Math.ceil(num / 8) - 1;
    let remain = num % 8;
    let source = arr[index];
    let flag = source & 1 << remain;
    return flag != 0;
};


/**
 * init arr
 * */
const init = function(length){
    let arr = [];
    for(let i = 0; i < length; i ++){
        arr.push(0);
    }
    return arr;
};

module.exports = {
    init,
    insert,
    isIn
};