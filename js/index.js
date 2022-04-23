// // function removeChar(str) {

// //     return str.slice(1, str.length - 1);
// // };
// // console.log(removeChar('ooopsss'));

// // function reverseWords(str) {
// //     return str.split('').reverse().join('').split(' ').reverse().join(' ');
// // }

// // console.log(reverseWords('apple'));

// // function descendingOrder(n){
// //     return parseInt(n.toString().split('').sort().reverse().join(''));
// // }

// // console.log(descendingOrder(1021));

// // var number=function(array){
// //     return array.map((e, index)=> `${++index}:${e}`);
// // }

// // console.log(number(["a", "b", "c"]));

// function lovefunc(flower1, flower2){
//   if (flower1 % 2 === 1) {
//       return true;
//     }SS
//     return false;
// }

// // console.log(lovefunc(0,1));

function sumMix(x) {
   
 return x.reduce((acc, elem) => acc + +elem, 0);
  
}

console.log(sumMix([9, 3, '7', '3']));