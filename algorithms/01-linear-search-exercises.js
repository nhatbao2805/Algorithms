// npm run js -- algorithms/01-linear-search-exercises

const bai1 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }
};
// let kqB1 = bai1([5, 1, 7, 3, 9], 3);
// console.log(kqB1);
// const bai2 = (nums, target) => {
//   let tempArr = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       tempArr.push(i);
//     }
//   }
//   return tempArr;
// };
// let kqB2 = bai2([1, 2, 3, 2, 4, 2], 2);
// console.log(kqB2);

// bai 3 (chi can check them dieu kien if vao thoi nen khong can),4,5,6 co ban

// const bai7 = (nums) => {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {
//       let value = map.get(nums[i]);
//       map.set(nums[i], value + 1);
//       return nums[i];
//     } else {
//       map.set(nums[i], 1);
//     }
//   }
//   console.log("aa", map);
//   return 0;
// };

// const bai7Cach2 = (nums) => {
//   let set = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     if (set.has(nums[i])) {
//       return nums[i];
//     } else {
//       set.add(nums[i]);
//     }
//   }
//   return 0;
// };

// console.log(1111, bai7Cach2([3, 4, 2, 1, 2, 3]));

const bai8 = (nums) => {
  for (let i = 0; i < nums.length; i++) {}
};
