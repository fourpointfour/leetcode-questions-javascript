// 1470. Shuffle the Array
// Easy.

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    var res = [];
    for(let i = 0, j = n; j < 2 * n; ++i, ++j){
        res.push(nums[i]);
        res.push(nums[j]);
    }
    return res;
};