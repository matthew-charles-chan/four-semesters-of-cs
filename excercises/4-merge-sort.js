/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers
  
  To read the approach, refer to the class materials at 
  https://btholt.github.io/four-semesters-of-cs/
  
  As always, you can rename describe to be xdescribe to prvb event the
  unit tests from running while you're working
  
  There is no visualization mechanism for this algorithm. Use your own
  preferred method of introspection like console.log().
*/

// merges two array into one ordered array
const merge = (left, right) => {
  let results = [];

  // while both arrays( L / R ) contain elements
  while(left.length && right.length) {
    // if first L element is smaller than first R element
    left[0] <= right[0] ?
      // remove first element of L array (shift), push to resutls
      results.push(left.shift()):
      // remove first element of R array (shift), push to results
      results.push(right.shift());
  }
  
  // append left and right arrays to reaults, if array is empty, nothing will be appended
  results = results.concat(left, right)


  return results
}


// breaks array into smaller arrays and calls merge
const mergeSort = (nums) => {
  const length = nums.length

  // if length of nums is 1, return nums
  if(length < 2) {
    return nums;
  }

  // split nums into two arrays (left/ right) (aprox. equal sized)
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);
  
  // recursiviley call mergeSort on left, right arrays
  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)

  return merge(sortedLeft, sortedRight);
};



const nums = [10,5,3,8,2,6,4,7,9,1];
console.log(mergeSort(nums));