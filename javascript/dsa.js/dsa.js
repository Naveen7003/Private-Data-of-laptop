// var a = 5;
// var b = 8;
// var c = 9;
  
// a = a+b+c;
// b = a-b;
// a = a-b;

// console.log(a);
// console.log(b);


// var a= "naveen ";
// var b = "prajapati";
// var c = a+b;
// console.log(c);


//Q1. write a program to reverse a string

// var a = "Naveen prajapati";
// var length = a.split('').reverse().join('');
// console.log(length);


//Q2. Find the maximum no in an array

// const array = [4, 12, 8, 91, 37, 5];
// const max = Math.max(...array);
// console.log(max);


//Q3. palindrome check

// var a = 121;
// var backward = a.toString();
// var reverse = backward.split('').reverse().join('');
// var reverseno = parseInt(reverse, 10)
// if(a === reverseno){
//     console.log("palindrome")
// }
// else{
//     console.log("not")
// }

//Q4.  Finding vowels

// var a = "my name is naveen prajapati";
// var ttl = 0 ;
// for(var i=0; i<a.length; i++){
//     if(a[i] === 'a' || a[i] === 'e' || a[i] === 'i' || a[i] === 'o' || a[i] === 'u'){
//         ttl++;
//     }
// }
// console.log(ttl);


//Q5.  for case insensitivenes if you write some letter in capital then you have to write this code 

// var a = "My name is naveen prajapati";
// var vowels = 0; // Initialize a variable to count vowels

// for (var i = 0; i < a.length; i++) {
//     var char = a[i].toLowerCase(); // Convert the character to lowercase for case insensitivity

//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         vowels++;
//     }
// }

// console.log(vowels);


// Q6.   remove the duplicate elements in an array

//  var arr = [23,45,43,45,65,78];
//  var unique = [...new Set(arr)]
//  console.log(unique)

// note :- set arrays ka ek naya set banata hai jisme duplicate allowed nhi hote


// Q7. Implement a function that counts the occurrences of a specific character in a string.

// var s = "mY name is naveen prajapati"
// var l = 'a';
// var count = 0;
// for(var i=0; i<=s.length; i++){
//     if(s.charAt(i) === l){
//         count = count + 1;
//     }
// }
// console.log(count);
 
// Q8. Find max and min value in the array

// var arr = [23,45,67,78,34]
// var max = 0;

// arr.forEach(function(val){
//     if(val> max){
//         max = val;
//     }})

// console.log(max);

// var arr = [23,45,67,78,34]
// var min = 0;
// arr.forEach(function(val){
//     if(val[0]< val){
//         min = val;
//     }})

// console.log(min);

//Q9 right angle triangle pattern and just reverse the loop for left angle triangle

// var a=5
// let row =''
// for(var i=0;i<=5;i++){
//     row+="*"
//     console.log(row)
// }

//Q10 pyramid pattern
// let n = 5
// for (var i=1;i<=n;i++){
//     let spaces = " ".repeat(n-i)
//     let astrix = "*".repeat(2*i-1)
//     console.log(spaces + astrix+ spaces)
// }

//Q11 Diamond pattern

// let n = 5
// for (var i=1;i<=n;i++){
//     let spaces = " ".repeat(n-i)
//     let astrix = "*".repeat(2*i-1)
//     console.log(spaces + astrix+ spaces)
// }
// for(var i=n-1;i>=1;i--){
//     let spaces = " ".repeat(n-i)
//     let astrix = "*".repeat(2*i-1)
//     console.log(spaces + astrix+ spaces)
// }

//Q12 right angle triangle with numbers
//  for(var i=1;i<=5;i++){
//     let row = " "
//     for(var j=1;j<=i;j++){
//         row+= j
//         console.log(row)
//     }
//  } incorrect

//Q9 fibonacci series
//isme do chiz chahiye first value 0 and second value 1 then third value for calculation
// var inputNo = 1
// var f = 0;
// var s = 1

// for(var i=0;i<=10;i++){
//     console.log(f)
//     var as = f+s
//     f = s
//     s = as
// }

// Q10 remove duplicate from sorted array
// let nums = [1,1,2,2]
//     let arr=[]
//     for(var i=0;i<nums.length;i++){
//         if(nums[i]!==nums[i+1]){
//             arr.push(nums[i])
//         }
//     }
//     console.log(arr)

// Q 11 Longest substring without repeating characters


//Q12 merge two sorted array

//using arguments
// var a=10
// function check(){
//     console.log(a)
// }
// check(a)

//using parameters
// function check(a){
//     console.log(a)
// }
// check(10)


// Q13 Prime no
// var a =  8
// var b = 0
// for(var i=2;i<a;i++){
//     if(a%i == 0){
//         console.log("not")
//         b=b+1
//         break;
    
// }}
// if(b!=1){
//     console.log("Prime")
// }

//sum of digits
// let no = 498
// let na =no.toString().split('')
// let sum =0
// for(var i=0;i<na.length;i++){
//       sum += parseInt(na[i],10)
// }
// console.log(sum)

//armstrong no
// let no = 407
// let na =no.toString().split('')
// let sum =0
// for(var i=0;i<na.length;i++){
//       sum += parseInt(na[i],10)*parseInt(na[i],10)*parseInt(na[i],10)
// }
// if(sum === no){
//     console.log("armstrong")
// }else{
//     console.log("not")
// }

//sum of array
// let arr = [1,2,3,4,5,6]
// let sum =0
// for(var i=0;i<arr.length;i++){
//     sum += arr[i]
// }
// console.log(sum)

//palindromic array
// let arr = [1,2,1]
// let a =  arr.toString().split('')
// if(a.reverse() === a){
//     console.log("Yes")
// }else{
//     console.log("No")
// }

//arr left rotate by one
// let arr = [1,2,3,4,5]
// let no = arr.pop();
// arr.unshift(no)
// console.log(arr)

//array right rotate by one
// let arr = [1,2,3,4,5]
// let no = arr.shift();
// arr.push(no)
// console.log(arr)

//binay serach
// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
  
//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);
  
//       if (arr[mid] === target) {
//         return mid; // Target found, return the index
//       } else if (arr[mid] < target) {
//         left = mid + 1; // Continue searching in the right half
//       } else {
//         right = mid - 1; // Continue searching in the left half
//       }
//     }
  
//     return -1; // Target not found
//   }
  
//   const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const target = 7;
//   const result = binarySearch(sortedArray, target);
  
//   if (result !== -1) {
//     console.log(`Element found at index: ${result}`);
//   } else {
//     console.log("Element not found in the array.");
//   }

//occurences of a word
// let sentence = "The quick brown fox jumps over the lazy dog. The fox was very quick."
// let word = "the"
// let count = 0
// let newword = sentence.split(/\s+/)
// for(var i=0;i<newword.length;i++){
//     if(newword[i].toLocaleLowerCase() === word.toLocaleLowerCase()){
//         count++
//     }
// }
// console.log(count)
      
//to find longest word in string
// function findLongestWord(str) {
//     const words = str.split(/\s+/); // Split the string into words
//     let longestWord = '';
  
//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length > longestWord.length) {
//         longestWord = words[i]; // Update longest word if current word is longer
//       }
//     }
  
//     return longestWord;
//   }
  
//   const text = "The quick brown fox jumps over the lazy dog";
//   const longestWord = findLongestWord(text);
//   console.log("The longest word is:", longestWord); // Output: "jumps"    same for small

//reverse each word of string
// let str = "Naveen Is a good boy"
// let newarr = str.split(" ").map(function(word){    used map instead of foreach cause it gives values in new array
//     return word.split("").reverse().join("")
// })
// console.log(newarr.join(" "))

//to check if an integer is a no or not
// let no = 10
// console.log(Number.isInteger(no))

//cancat an array with function
// function duplicate(arr){
//     return arr.concat(arr)
// }
// console.log(duplicate([1,2,3,4,5]))

//function that reverse no
// function rev(no){
//     return no.toString().split("").reverse().join("")
// }
// console.log(rev(10))

//function that return a string in alphabatical order
//  function sortarr(arr){
//     return arr.toLowerCase().split("").sort().join("")
//  }
//  console.log(sortarr("Naveen"))

//flatten array
// var arr = [[1,2],[3,4],[5,6]]
// console.log(...arr)

//destructuring an array
// let arr = [1,2,3,4,5]
// let [n1,n2,n3,n4,n5] = arr
// console.log(n1)
// console.log(n2)
// console.log(n3)
// console.log(n4)
// console.log(n5)

//second max
// let arr = [1,2,3,4,5,6]
// let max = arr.sort((a,b) => a-b)
// console.log(max[max.length-2])


// let arr = [112,131,411]
// let max = arr.sort((a,b) => a-b)
// console.log(max[max.length-1] + max[max.length-2])


//push and pop element ko last se add and delete krte hai 
//shift and unshift element ko starting se add and delete krte hai


//merging two sorted arrays

//interview question for output it will give 4
// function func1(){
//     return 2
// }
// function func2(){
//     return 4
// }
// var a = (func1(), func2())
// console.log(a)

//console.log(true == ""); //false
//console.log(true === "");  //false

// let s = "42"
// let a = []
// s = s.trim()
// for(var i=0;i<=s.length; i++){
//     if(s[0] !== Number){
//         console.log(0);
//     }
//     if(s[i] === Number){
//         a.push(s[0])
//         i++;
//     }else{
//         console.log(a.toString())
//     }
// }


// promise syntax
// const promise = new Promise(
//     (resolve) => {
//       setTimeout(() => {
//         resolve("I'm a Promise!");
//       }, 5000);
//     },
//     (reject) => {}
//   );
  
//   promise.then((value) => console.log(value));

// let str = ["I", "am", "Naveen"]
// let newstr= str.slice(0,2)
// for (var i=0;i<=newstr.length;i++){
//     console.log(str[i][0])
// }

//swap words
// function swap() {
//     let sentence = "quick brown fox jumps over the dog"
//     return sentence.split(' ')
//     .map((word) => {
//         if(word === 'fox') return 'dog';
//         if(word === 'dog') return 'fox';
//         return word     
//     }).join(' ')
// }
// let result = swap();
// console.log(result)




