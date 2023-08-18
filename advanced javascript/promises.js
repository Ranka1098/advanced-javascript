// the promise object represent the eventual
// completion or failure of an asynchronus operation and its resulting value

// simple example of callback hell
// database depeneds on internate speed
// function saveDb(data) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     console.log("your data is saved : "  + internetSpeed);
//   } else {
//     console.log("weak connection");
//   }
// }
// saveDb("your internet speed");

// hamara jitna bhi kaam ho data ke save hone ke baad ye ek function ke under ho agar data save ho jata
// us ke liye hum call back ka use karenge
// agar data save ho jaye sucess() callback call ho jaye
// agar data fail ho jaye failure() callback call ho jaye

// function saveDb(data, sucess, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     sucess();
//   } else {
//     failure();
//   }
// }
// saveDb(
//   "your internet speed",
//   () => {
//     console.log("your data is saved : ");
//   },
//   () => {
//     console.log("weak connection");
//   }
// );

// manlo hamre code ke ander ek data save ho gaya uske baad hum ek or data ko save karana chahte hai
// agar data first wala save hoga to dusrala vala save karne ki koshish karte hai.
// saveDb(
//   "your internet speed",
//   () => {
//     console.log("your data is saved : ");
//     saveDb("second data",()=>{ //callback in sucess
//         console.log("second data saved");
//         saveDb("third data",()=>{ //nested call backs
//             console.log("third data saved")
//         },()=>{
//             console.log("third data failed")
//         })
//     },()=>{
//         console.log("weak connection");
//     })
//   },
//   () => {
//     console.log("weak connection");
//   }
// );
// isme kafi sara logic ek dusre se dependent hota hai

// -promise hamari ek javascript ki object hoti hai or ye object represent karti hai evantual completion
//  or failure of an asynchronus operation

// resolve and reject
// note => promise is callback
// function saveDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("sucess: data saved");//promise result
//     } else {
//       reject("failed");
//     }
//   });
// }
// saveDb function ek promise return kar raha hai . saveDb ko ye nahi pata promise ke under resolve() execute
// ho ga ya reject() hoga usse bas ye pata hai muze kuch to exexute karana hi hai dono may se.
//saveDb function call karenge to hume ek promise return karega

// promise have 3 state pending,fullfilled,reject
// kyu jo hamara promise hai jo apne app me object hai object pass apne method bhi hote hai
// promise ke ander hum  do methods ko frequently use karenge then() and cathch()
// promise agare fullfilled hone ke baad hum kuch kamm kare to then() method ko call kar sakte hai.
// promise agare failed hone ke baad hum kuch kamm kare to catch() method ko call kar sakte hai.

// let requet = saveDb("apna college"); //req = promise object
// requet.then(()=>{
// console.log("fullfiled")//promise state
// console.log(requet)
// }) //then method khud ek callback leta hai
// .catch(()=>{
//     console.log("error")
//     console.log(requet)
// })//catch method khud ek callback leta hai

// ----------promise chaninig-----------------
// promise chaning basically ek ke baad bohat sare promises ko chain karna
// basically hum bohat sare then use karte hai usse hum promise chaning kehte hai

// jab humara 1st data saved ho jaye tab hum 2nd data save karenge
// function saveDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("data saved successfully :");
//     } else {
//       reject("weak connection");
//     }
//   });
// }

// saveDb("imp data")
//   .then(() => {
//     // ise then method hai phele data 2 ko save karega
//     console.log("1st data saved");
//     //uske baad 3rd data ko save karane ki koshish karega jo bhi promise yaha per aaye ga wo return ho jayega
//     // ye jo then method hai iske callback se return ho jaye
//     return saveDb("hello world");
//   })
//   .then(() => {
//     console.log("2nd data saved");
//     return saveDb("ashok");
//   })
//   .then(() => {
//     console.log("3rd data saved");
//   })
//   .catch(() => {
//     console.log("error");
//   });

//   //---------result and error in promise------------------------

// //jo bhi hamare promise hote hai jab bhi resolove ya reject hote hai
// //to hamesha promises ke ander koi data aata hai ya phir vo koi valis result ho sakta hai error ho sakta hai.

// // jo hamri then method hai uske ander hum ek argument le sakte hai or is argument ke jo bhi hamri promise hogi
// // uska result aayega wo iss argument ke ander save hoga

// saveDb("imp data")
//   .then((result) => {
//     // ise then method hai phele data 2 ko save karega
//     console.log("1st data saved");
//     console.log("result of promise"+ result);

//     //uske baad 3rd data ko save karane ki koshish karega jo bhi promise yaha per aaye ga wo return ho jayega
//     // ye jo then method hai iske callback se return ho jaye
//     return saveDb("hello world");
// })
// .then((result) => {
//     console.log("2nd data saved");
//     console.log("result of promise"+ result);
//     return saveDb("ashok");
// })
// .then((result) => {
//     console.log("3rd data saved");
//     console.log("result of promise"+ result);
//   })
//   .catch((error) => {
//     console.log("error of promise"+ error);
//   });

// -----------------------example of promise----------------

let h1 = document.querySelector("h1");
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}
changeColor("red", 1000)
  .then(() => {
    return changeColor("green", 1000);
  })
  .then(() => {
    changeColor("yellow", 1000);
  })
  .catch(() => {
    console.log("error");
  });
