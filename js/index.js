// // // // function removeChar(str) {

// // // //     return str.slice(1, str.length - 1);
// // // // };
// // // // console.log(removeChar('ooopsss'));

// // // // function reverseWords(str) {
// // // //     return str.split('').reverse().join('').split(' ').reverse().join(' ');
// // // // }

// // // // console.log(reverseWords('apple'));

// // // // function descendingOrder(n){
// // // //     return parseInt(n.toString().split('').sort().reverse().join(''));
// // // // }

// // // // console.log(descendingOrder(1021));

// // // // var number=function(array){
// // // //     return array.map((e, index)=> `${++index}:${e}`);
// // // // }

// // // // console.log(number(["a", "b", "c"]));

// // // function lovefunc(flower1, flower2){
// // //   if (flower1 % 2 === 1) {
// // //       return true;
// // //     }SS
// // //     return false;
// // // }

// // // // console.log(lovefunc(0,1));

// // // function sumMix(x) {
   
// // //  return x.reduce((acc, elem) => acc + +elem, 0);
  
// // // }

// // console.log(sumMix([9, 3, '7', '3']));

// // var Calculator = {
// //  average: function(...num) {
// //         if (num===[]) {
// //             return 0;
// //         } else {
// //             return num.reduce((acc, el) => (acc + el), 0) / num.length;
// //         }
// //  }
// // };

// // console.log(Calculator.average());

// function solution(str){
//     return str.split('').reverse().join('');
    
// }
// console.log(solution('world'));

// function sum (numbers) {
//     let total = 0;
//   for(let i=0;i<sum.length;i+=1){
//      sum+=total
//     }
  // return total;
    // if(numbers === [])
//     return 0;
// };

// console.log(sum([1, 5.2, 4, 0, -1]));

// function check(a, x) {
//   return a.includes(x)?true: false
// }

// console.log(check([66, 101], 66));

function getMiddle(s)
{
  if (s % 2 !== 0) {
    
  }
}

// console.log(getMiddle("test"));

let anyString = 'Mozilla'
let anyString4 = anyString.substring(anyString.length - 4)
console.log(anyString4)