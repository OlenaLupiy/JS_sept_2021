// function userCard(number) {
//     return {
//         balance: 100,
//         transactionLimit: 10,
//         historyLogos: [{1: 25}, {2: 300}],
//         key: number,}
// }
//         getCardBalance: () => userCard1.balance,
//         getCardLimit: () => userCard1.transactionLimit,
//         getCardHistory: () => userCard1.historyLogos,
//         putCredits: (newBalance) => userCard1.balance = newBalance,
//         takeCredits: (credit, num) => {
//             if (userCard1.balance > credit && userCard1.transactionLimit > num) {
//                 userCard1.balance = userCard1.balance - credit
//             } else console.error('stop')
//         },
//         setTransactionLimit: (newLimit) => userCard1.transactionLimit = newLimit,
//         transferCredit: (money) => {
//             if (userCard1.balance > money) {
//                 userCard1.balance = (userCard1.balance - money) - (userCard1.balance - money) * 0.5 / 100
//             }
//         },
//     }
// }

// userCard1 = userCard(1);
// userCard2 = userCard(2);
// console.log(userCard1);
// console.log(userCard2)
// userCard1.putCredits(200);
// console.log(userCard1.getCardBalance());
// userCard1.takeCredits(25, 4);
// console.log(userCard1.getCardBalance());
// userCard1.setTransactionLimit(15);
// console.log(userCard1.getCardLimit());
// console.log(userCard1.getCardHistory().length);
// userCard1.transferCredit(30, userCard2);
// console.log(userCard1.getCardBalance())
