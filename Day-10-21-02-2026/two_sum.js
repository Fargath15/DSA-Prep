// 1. Two Sum

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(nums, target) {
    let seen = new Map();

    for (let i = 0; i < nums.length; i++) {

        const complement = target - nums[i];
        if(!seen.has(complement)) {
            seen.set(nums[i], i);
        }
        else {
            return [seen.get(complement), i];
        }        
    }
}

const nums = [2,7,11,15];
const target = 9;
const result = twoSum(nums,target);
console.log(result);

// Time Complexity: O(n)
// Space Complexity: O(n)