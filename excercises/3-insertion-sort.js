
const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // snapshot(nums);
      if (nums[i] < nums[j]) {
        const spliced = nums.splice(i, 1);
        // console.log(spliced)
        // console.log(nums)
        nums.splice(j, 0, spliced[0])
        // console.log(nums)
      }
    }
  }
}




const nums = [10,5,3,8,2,6,4,7,9,1];
console.log(insertionSort(nums));