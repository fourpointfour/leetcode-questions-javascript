// 1431. Kids With the Greatest Number of Candies
// Easy.

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var max_val = Math.max(...candies), res = [];
    
    for(let val of candies) {
        if(val + extraCandies >= max_val)
            res.push(true);
        else
            res.push(false);
    }
    return res;
};