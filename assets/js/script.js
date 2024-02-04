"use strict";


//  const sum = function(a,b){
//     return a+b;
//  }

//  console.log(sum(3,5));



// const sum = (a,b) =>{

//     return a+b;

// }

// console.log(sum(3,5));


// function test() {
//     for (let i = 0; i < arguments.length; i++) {

//         console.log(arguments[i]);
//     }
// }

// test(1, 2, 3, 4, 5);


// console.log(this);

// function test(){
//     console.log(this)
// }

// test();


// const getSum = ()=>{
//     console.log(this)
// }

// getSum();


// function showResult(num1, num2){
//     let str = "your result";
//     let res = sum(num1,num2);
//     console.log(str + " " + res);
// }

// function sum(a,b){
// return a+b;
// }


// showResult(3,6);


// for (let i = 1; i <= 5; i++) {
//    console.log(i);
    
// }


// function showNums(firstNum){
//     console.log(firstNum);
//     let nextNum = firstNum -1;
//     if(nextNum > 0){
//         showNums(nextNum)
//     }
// };

// showNums(5);


// function getFactorial(num){

//     if(num ===0 || num ===1){
//         return 1;
//     }
//     return num*  getFactorial(num-1);
// };

// console.log(getFactorial(5));


// function sumOddNums(arr){
//     let sum = 0;

//     for (const item of arr) {
//         if(item % 2 == 1){
//             sum+=item;
//         }
//     }

//     return sum;
// }


// function sumOfEvenNums(arr){
//     let sum = 0;
//     for (const item of arr) {
        
//         if(item % 2 == 0){
//             sum+=item;
//         }
//     }

//     return sum;
// }

// function sumOdd(n){
//     return n % 2 ==1;
// }

function sumEven(n){
    return n % 2 == 0;
}


function sumNums(arr, callback){
    let sum = 0;

    for (const item of arr) {
        if(callback(item)){
            sum+= item;
        }
    }
    return sum 
}


let nums = [1,2,3,4,5,6];

console.log(sumNums(nums, sumEven));



