function rec(startElement) {
    let arr = [];
let father = document.getElementById('wrap');
arr.push(father);
    if (father.children.length){

        for (const element of father.children) {
            if(!element.classList) {
                return -1
            } else {arr.push(element.classList);}
            rec(element);
            }

    }
    console.log(arr)
}

rec(document.body);

// function numbers(num) {
//     let count = 0;
//         let newNumber = num % 10;
//         console.log(newNumber)
//         count+=newNumber;
//         console.log(count);
//
//     numbers(num/10);
// if (num === 0){
//     return -1;
// }



// }
//
// console.log(numbers(1234))
