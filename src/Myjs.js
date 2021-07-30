const co = 12
console.log(co)

const aaa = Object.freeze({})
aaa.pu = 11

console.log(aaa.pu)

//
// let a = 29
//
// if (a > 20) {
//     let tmp; // TDZ结束
//     console.log(tmp); // undefined
//
//     tmp = 123;
//     console.log(tmp); // 123
//
//     {
//         let a = "sad"
//         {
//             let a = "sss"
//             console.log(a)
//         }
//         console.log(a)
//     }
// }
