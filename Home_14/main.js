// function wakeUp(hourWake) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             let date = new Date();
//             let hour = date.getHours();
//             if(hourWake < hour){
//                 console.log('Wake up')
//                 resolve('Ok')
//             } else {
//                 reject('I am late')
//             }
//
//         }, 1000)
//     })
// }
//
// function brushTeeth() {
//     return new Promise(((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('White teeth')
//           resolve('My teeth is clean')
//         }, 500)
//     }))
// }
// function eat(mealPrepare) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(()=>{
//             if (mealPrepare){
//                 console.log('Eating');
//                 resolve('Done')
//             } reject('Error')
//         },2000)
//     }))
// }
// function learnJS(lesson) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(()=>{
//             if (lesson >4){
//                 console.log("learn");
//                 resolve('Done');
//             } reject('You are stupid')
//
//         }, 5000)
//     }))
//
// }
// function rest() {
//     return new Promise(((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('You have time fo rest');
//             resolve('Rest')
//         }, 700)
//     }))
//
// }
// function homeWork() {
//     return new Promise(((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('Time with child');
//             resolve('Good mam')
//         }, 3000)
//     }))
// }
// function goSleep(time) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(()=>{
//             if (time > new Date().getHours()){
//                 console.log('Go to sleep');
//                 resolve('Sleep')
//             } reject('You have time')
//         }, 1500)
//     }))
// }
// wakeUp(9)
// .then((e)=>{
//     console.log(e);
//     console.log(1);
//     return brushTeeth();
// })
// .then((e)=>{
//     console.log(e);
//     console.log(2);
//     return eat('bread');
// })
// .then((e)=>{
//     console.log(e);
//     console.log(3);
//     return learnJS(5)
// })
// .then((e)=>{
//     console.log(e);
//     console.log(4);
//     return rest();
// })
// .then((e)=>{
//     console.log(e);
//     console.log(5);
//     return homeWork();
// })
// .then((e)=>{
//     console.log(e);
//     console.log(6);
//     return goSleep(13);
// })
// .then((e)=>{
//     console.log(e);
//     console.log(7)
// })

function wakeUp(hourWake) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let date = new Date();
            let hour = date.getHours();
            if(hourWake < hour){
                console.log('Wake up')
                resolve('Ok')
            } else {
                reject('I am late')
            }

        }, 1000)
    })
}

function brushTeeth() {
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            console.log('White teeth')
            resolve('My teeth is clean')
        }, 500)
    }))
}
function eat(mealPrepare) {
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            if (mealPrepare){
                console.log('Eating');
                resolve('Done')
            } reject('Error')
        },2000)
    }))
}
function learnJS(lesson) {
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            if (lesson >4){
                console.log("learn");
                resolve('Done');
            } reject('You are stupid')

        }, 5000)
    }))

}
function rest() {
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            console.log('You have time fo rest');
            resolve('Rest')
        }, 700)
    }))

}
function homeWork() {
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            console.log('Time with child');
            resolve('Good mam')
        }, 3000)
    }))
}
function goSleep(time) {
    return new Promise(((resolve, reject) => {
        setTimeout(()=>{
            if (time > new Date().getHours()){
                console.log('Go to sleep');
                resolve('Sleep')
            } reject('You have time')
        }, 1500)
    }))
}
async function foo() {
    try {
        await wakeUp(13);
        await brushTeeth();
        await eat('apple');
        await learnJS(6);
        await rest();
        await homeWork();
        await goSleep(16);
    } catch (e) {

        console.warn(e)
    }
    
}
foo().then()