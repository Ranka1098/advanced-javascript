// callback hell meance nesting of callbacks.

// h1 = document.querySelector("h1");
// h1.style.color = "red";

//  i want to color change after 1 second

// setTimeout(()=>{
//     h1 = document.querySelector("h1");
//     h1.style.color = "red";
// },1000);

// setTimeout(()=>{
//     h1 = document.querySelector("h1");
//     h1.style.color = "orange";
// },2000);

// setTimeout(()=>{
//     h1 = document.querySelector("h1");
//     h1.style.color = "green";
// },3000);

// setTimeout(()=>{
//     h1 = document.querySelector("h1");
//     h1.style.color = "blue";
// },4000);

// -------------------------------------------------------------
// another way
// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   setTimeout(() => {
//     h1.style.color = color;
//   }, delay);
// }
// changeColor("red",1000)
// changeColor("orange",2000)
// changeColor("green",3000)
// changeColor("yellow",4000)
// this is not good way beause second thing depends on first thing
// and third thing depends on second thing thats why show the depedency for use callbacks
// -------------------------------------------------------------------
h1 = document.querySelector("h1");

function changeColor(color, delay, nextcolorChange) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextcolorChange) {
      // if condition false next color not showing
      nextcolorChange();
    }
  }, delay);
}
// function changecolor takes three argument color, delay and nextcallback for color change
changeColor("red", 1000, () => {
  changeColor("green", 1000, () => {
    changeColor("yellow", 1000);
  });
});
// if red color complete after green color show and after that yellow color show

// for removing callback hell by using promises,async and await 