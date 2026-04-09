// Chạy: từ thư mục Preview — npm run exercises:binary-search
// hoặc: node algorithms/02-binary-search-exercises.js

// -----------------------------
// Binary search — tìm đúng chỉ số có giá trị === target (mảng tăng dần)
// -----------------------------
const binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

// let index = binarySearch([1, 2, 2, 3, 4, 5, 6, 7], 4);
// console.log("index", index);

// -----------------------------
// Lower bound — chỉ số nhỏ nhất i sao cho nums[i] >= target (mảng tăng dần)
// -----------------------------
const lowerBound = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let ans = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};

// let index = lowerBound([1, 2, 3, 5, 6, 7, 8], 4);
// console.log("index", index);

// -----------------------------
// Binary search trên mảng xoay vòng — tìm chỉ số phần tử nhỏ nhất (pivot / min)
// -----------------------------
const binarySearchRotatedMin = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

// let index = binarySearchRotatedMin([0, 1, 2, 4, 5, 6, 7]);
// console.log("index", index);

// -----------------------------
// Binary search — lần xuất hiện cuối cùng của target (mảng tăng dần)
// -----------------------------
const binarySearchLast = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let ans = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      ans = mid;
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return ans;
};

// let index = binarySearchLast([1, 2, 4, 4, 5], 4);
// console.log("index", index);

// -----------------------------
// Đếm số lần xuất hiện — dùng lower bound + binary search last
// -----------------------------
const countOccurrences = (nums, target) => {
  const firstIndex = lowerBound(nums, target);
  if (firstIndex === -1 || nums[firstIndex] !== target) return 0;

  const lastIndex = binarySearchLast(nums, target);
  return lastIndex - firstIndex + 1;
};

// const index = countOccurrences([1, 2, 4, 4, 4, 4, 5], 4);
// console.log("index", index);
