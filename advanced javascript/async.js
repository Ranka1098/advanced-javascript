// async keyword create async functions
// humne jo bhi normal function banaya hai jiske samne async keyword likh dete hai ho hamara fumction async ho jata hai.
// jitne bhi async functions hote hai we asbhi by default promise ko return karte hai.

// async function greet(){
// console.log("hello")
// }
// // greet() then and catch method use kar sakte hai.
// greet().then(()=>{
// console.log("promise successfull");
// }).catch(()=>{
// console.log("promise error");
// })

// async in arrow function

// let hello = async () =>{
// console.log("hello function")
// }
// hello();

// ---------------------------------------------------
// await keyword sirf async function ke ander hi use kar sakte hai
// await keyword pauses the execution of its surrounding async function until the promise settled
// basically await hamne jis bhi function call ke samne likh diya to await kya karega ki apne aaspaas ke saare
// async function ko pause kardega. jab tak hamari current function call chal rahi usme promise settle nahi
// ho jata promise resolve ya reject nahi ho jata.

// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//         console.log(num);
//       resolve();
//     },1000);
//   });
// }

// async function demo(){
//     await getNum();//jab tak iska promise resolve nahi hoja ta baki call anhi jayegi
//     await getNum();
//     await getNum();
// }
// after 1 second ke baad getnum() tino function ek sath call ho arhe hai
// lekin await key word use karne ke baad ek ke baad ek yaise function call ho rahe hai.

let h1 = document.querySelector("h1");
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

async function demo() {
  await changeColor("red", 1000);
  await changeColor("green", 1000);
  await changeColor("blue", 1000);
  await changeColor("yellow", 1000);
  await changeColor("orange", 1000);
}
