function getSecondLargest(nums) {
    // Complete the function
   var max = Math.max(...nums);
    var test = nums.splice(nums.indexOf(test) ,1);
    return Math.max(test);
}

const array = [1,2,3,4,5];

getSecondLargest(array)