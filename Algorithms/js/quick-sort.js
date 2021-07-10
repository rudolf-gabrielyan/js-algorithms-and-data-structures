function quickSort(array) {
    const arr = [...array];

    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const leftArr = [];
    const rightArr = [];

    for (const el of arr.slice(0, arr.length - 1)) {
        el < pivot ? leftArr.push(el) : rightArr.push(el);
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
const sortArr = quickSort(arr);
console.log(sortArr);