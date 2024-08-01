// Recursion Problem Set: Coding Exercises

// Calculate and return the total sum using recursive approach
const sum = (arr, total = 0 , idx = 0 ) => {
  if (idx === arr.length ) return total 

  return sum(arr, total + arr[idx], idx + 1)
}

// Reverse string using recursive approach
const reverse = (str) => {
  if (str <= 1) return str 
  return reverse(str.slice(1)) + str[0]
};

// Iterative approach to solving the fibonacci problem
const fibIter = (n) => {
  if (n < 2) return n 
  let curr = 0
  let oneBack = 1
  let twoBack = 0

  for(let i = 2; i <= n; i++){
    curr = oneBack + twoBack
    twoBack = oneBack
    oneBack = curr
  }
return curr
};

// Recursive fibonacci
const fibRec = (n) => {
  if (n < 2) return n 
  return fibRec(n -1 ) + fibRec(n - 2)
};

// Return the index of target in arr, or -1 if not found using recursion 
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
   if (start > end ) return -1
        const mid = Math.floor((start + end) / 2)
        if (arr[mid] === target) return mid
        
    
    if (arr[mid]< target ) return binarySearch(arr, target, mid + 1, end)
      if (arr[mid]> target ) return binarySearch(arr, target, start, mid -1 )
};

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
