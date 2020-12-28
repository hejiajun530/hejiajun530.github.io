let arr = [2, 7, 10, 11, 33];
let target = 43;
function fn(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let temp = nums[i] + nums[j];
      if (temp == target) {
        console.log(nums[i], nums[j], i, j, temp);
      }
    }
  }
}
fn(arr, target);