# 常见的排序算法

## 快速排序

```javascript
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = Math.floor(arr / 2);
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === pivot) {
      continue;
    }
    if (arr[i] < arr[pivot]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), arr[pivot], ...quickSort(right)];
};
```

## 归并排序

```javascript
const merge = (l, r) => {
  let res = [];
  let m = 0;
  let n = 0;

  while (m < l.length && n < r.length) {
    while (l.length > 0 && r.length > 0) {
      if (l[0] < r[0]) {
        temp.push(l.shift());
      } else {
        temp.push(r.shift());
      }
    }
    return res.concat(l).concat(r);
  }
};

const mergeSort = (nums) => {
  let len = nums.length;
  if (len === 1) {
    return nums;
  }
  const index = Math.floor(len / 2);
  const arrLeft = nums.slice(0, index);
  const arrRight = nums.slice(index);

  const left = mergeSort(arrLeft);
  const right = mergeSort(arrRight);

  return merge(left, right);
};
```

## 冒泡排序

```javascript
const bubble = (nums) => {
  let len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let tmp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = tmp;
      }
    }
  }

  return nums;
};
```

## 选择排序

```javascript
const selectionSort = (arr) => {
  let len = arr.length;
  let minIndex, temp;
  console.time("选择排序耗时");
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        //寻找最小的数
        minIndex = j; //将最小数的索引保存
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.timeEnd("选择排序耗时");
  return arr;
};
```

## 插入排序

```javascript
const insertionSort = (array) => {
  console.time("插入排序耗时：");
  for (let i = 1; i < array.length; i++) {
    var key = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  console.timeEnd("插入排序耗时：");
  return array;
};
```
