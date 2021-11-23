// - Дано натуральное число n. Выведите все числа от 1 до n.

function numbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }

}
numbers(8)
// function numbers(n) {
//     if (n > 0) {
//         for (let i = 1; i <= n; i++) {
//             console.log(i)
//         }
//     } if (n < 0){
//         for (let i = n; i <=0 ; i++) {
//             console.log(i)
//         }
//     }
//
// }
// numbers(20)
// numbers(-15)
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// function foo(a, b) {
//     if (a < b){
//         for (let i = a; i <= b; i++) {
//             console.log(i)
//         } }
//     else if (a > b){
//             for (let i = a; i >=b ; i--) {
//                 console.log(i)
//             }
//         }
// }
//
// foo(1, 10);
// foo(8, 3)
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// function changePlace(arr, i) {
//     for (let j = 0; j < arr.length; j++) {
//         if (j === i){
//             let a = arr[j]
//           arr[j] = arr[i+1];
//           arr[j+1] = a;
//         }
//     }
//     return arr
// }
//
// console.log(changePlace([9,8,0,4], 0));
// console.log(changePlace([9,8,0,4], 1));
// console.log(changePlace([9,8,0,4], 2))
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// function zeroMove(arr) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] === 0){
//             let zero = arr.splice(i, 1);
//             arr.push(zero[0]);
//         }
//     }
//     return arr;
// }
//
// console.log(zeroMove([1,0,6,0,3]));
// console.log(zeroMove([0,1,2,3,4]));
// console.log(zeroMove([0,0,1,0]));
// console.log(zeroMove([1,0,0,0]));
// function zeroMove(arr = []) {
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//
//         if (arr[i]===0){
//             arr.splice(i, 1);
//             newArr.push(0);
//         i--;
//         }
//     }
//     console.log(arr.concat(newArr))
// }
// zeroMove([1,0,6,0,3]);
// zeroMove([0,1,2,3,4]);
//  zeroMove([0,0,1,0]);