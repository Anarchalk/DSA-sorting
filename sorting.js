
// Merge sort takes a divide and conquer approach to sorting. 
// It breaks the array down into continually smaller chunks,
// then merges them back together in the correct order:

//1. Understanding merge sort

// function mergeSort(array) {
//     console.log('splitting', array)
//     if (array.length <= 1) {
//         return array;
//     }
//     const middle = Math.floor(array.length / 2);
//     let left = array.slice(0, middle);
//     let right = array.slice(middle, array.length);

//     left = mergeSort(left);
//     right = mergeSort(right);
//     return merge(left, right, array);
// };
// function merge(left, right, array) {
//     let leftIndex = 0;
//     let rightIndex = 0;
//     let outputIndex = 0;
//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             array[outputIndex++] = left[leftIndex++];
//         }
//         else {
//             array[outputIndex++] = right[rightIndex++];
//         }
//     }

//     for (let i = leftIndex; i < left.length; i++) {
//         array[outputIndex++] = left[i];
//     }

//     for (let i = rightIndex; i < right.length; i++) {
//         array[outputIndex++] = right[i];
//     }
//     console.log('merging',array)
//     return array;
// };

// const arr = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]

// console.log(mergeSort(arr))

// 3rd recursive list [21, 1]
//16th recursive call list [2, 9]
//1st to merge [1, 21]
//7th to merge [ 1,  2,  9, 21, 26, 28, 29, 45]

//2. Understanding quicksort
// function swap(array, i, j) {
//     const tmp = array[i];
//     array[i] = array[j];
//     array[j] = tmp;
// };


// function quickSort(array, start = 0, end = array.length) {
//    if (start >= end) {
//        return array;
//    }
//     const middle = partition(array, start, end);
//     //console.log(array, 'partitioning')
//     array = quickSort(array, start, middle);
//     array = quickSort(array, middle + 1, end);
//     return array;
// };
// function partition(array, start, end) {
//     const pivot = array[end - 1];
//     let j = start;
//     for (let i = start; i < end - 1; i++) {
//         if (array[i] <= pivot) {
//             if ( i === 2)console.log(array)
//             swap(array, i, j);
//             j++;
//         }
//     }
//    swap(array, end-1, j);
//     return j;
// };

// 1.The pivot could have been either 14 or 17
//2. if the pivot is 12 [3,9]. if pivot is 14 []


//     const arr = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12]
//    console.log(quickSort(arr))
  

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};
const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

for(let i of arr) {
    const rand1 = Math.floor(Math.random() * (14 - 0)) + 0;
    const rand2 = Math.floor(Math.random() * (14 - 0)) + 0;
    swap(arr, rand1, rand2)
}
console.log(arr)
