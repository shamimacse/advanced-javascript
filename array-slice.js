const nums =[1, 2, 3, 4, 5, 6, 7, 8];

const part = nums.slice(3,6);
console.log(part);
console.log(nums);

const removed = nums.splice(3,6);
console.log(removed);
console.log(nums);

const together = nums.join(" ami ");
console.log(together);
