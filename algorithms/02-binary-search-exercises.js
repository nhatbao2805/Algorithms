// npm run js -- algorithms/02-binary-search-exercises

const Bai1 = (nums,target) =>{
    let left = 0
    let right = nums.length - 1;
    while (left <= right){
        const mid = Math.floor((left + right) / 2);
        if(nums[mid] === target) return mid;
        if(nums[mid] < target){
            left = mid + 1;
        } else
         {
            right = mid - 1;
        } 
    }
    return -1;
}

// let index = Bai1([1,2,3,4,5,6,7],4);
// console.log("index",index)

const Bai2  = (nums,target) =>{
    let left = 0
    let right = nums.length - 1;
    while (left <= right){
        const mid = Math.floor((left + right) / 2);
        if(nums[mid] >= target){
            return mid
        } else {
            left = mid + 1;
        }
        
    }
    return -1;
}

// let index = Bai2([1,2,4,4,5],3);
// console.log("index",index)


// const Bai3 = (nums) =>{
//     let left = 0
//     let right = nums.length - 1;
//     while (left < right) {
//         // console.log("left",left)
//         const mid = Math.floor((left + right) / 2);
//         if(nums[mid] > nums[right]){
//             // console.log("left",left)
//             left = mid + 1;
//         } else {
//             right = mid ;
//         }
//     }
//     return left
// }
// let index = Bai3([4,5,6,7,0,1,2]);
// console.log("index",index)


const Bai4 = (nums,target) =>{
    let left = 0
    let right = nums.length - 1;
    let ans = -1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if(nums[mid] === target) {
            return mid;
        }
        if(nums[mid] < target){
            left = mid + 1;
        }
    }
    return -1
}

// let index = Bai4([1,2,4,4,5],4);
// console.log("index",index)