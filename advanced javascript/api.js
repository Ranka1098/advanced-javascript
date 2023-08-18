// request - respnse cycle
// API basically ek URL ya link hai jo server se data lane ke liye use hoti hai
// API hume response me HTML,CSS or javascript return nahi karti
// api ke response me row data aayega jo ki Json ki formate me hoga

// JSON -> javascript object notation
// Json javascript ka part nahi sirf ek format hai.
// json kafi similar hai javascript object se kyu ki iss me key value pair hote hai.
// jason ki sabhi keys string hoti hai.
// jab bhi hume API ke response me Json ka data milta hai wo data pura ka pura string format me hota hai.

// --------------Accessing Data From Json--------------

// 1.JSON.parse(data)-> to parse data into javascript object.
// ye JSON response me jo data hota hai generally string ke ander store hokar aata hai.
// JSON.parse method string form me jo data hota hai use javascript object me convert ho jata hai.

// 2.JSON.stringify(json)-> to parse a javascript object data into json.
// ye method javascript object ko json data me convert kar deta hai.

// ---------- Testing API request---------------------------
// tools
// 1.Hoppscoth
// 2.Postman

// -------------Ajax--------------------------------
// Ajax-> asynchronus javascript and XML.

// --------------Http Verbs--------------------
// all are http requests
// jub hum serverside code likhna start karenge khudki to tab hum API request use karenge
// 1. GET -> API request se information lena.
// 2. POST ->Api request se kuch data bhejna chahte hai.
// 3. DELETE ->

// ---------Status code-------------------------------
// jab bhi hamari API se response wapas aata hai
// 200 -> ok iska matalab hai sari chije successfully kam kar gayi
// 404 -> not found iska matalab API exist nahi karti
// 400 ->bad request client error
// 500 -> intenal server error

// -------------adding information urls--------------------------
// API URLs hote hai end point unke ander additional information kaise bhej sakte hai
// query string example-> https://www.google.com/search?q=harry+potter
// ? make baad me key value pair me addtional information hai
// q meance query hai or harry+potter value hai

// -----------------http headres-----------------------------
// inspect -> network tab -> header
// additional information supply karta hai request header ke ander  api ke saath
// response header
// request header

// ----------- Our First Request Accessing  API-----------------------------
// using Fetch(url)
// fetch function me ek url bheja usse ek request gayi to wapas ek promise aaya
// agar promise successfully resolve ho jayega to humare pass kuch reponse aayega.
// reponse ko hum print karva rahe hai
// let url = "https://catfact.ninja/fact"; //random catfact url ko access karenge vaha se random fact lekar aayenge.
// fetch(url) //fetch(url) ye method hume ke promise return karta hai.
//   .then((response) => {
//     //then method ke ander koi reponse aaya hoaga
//     // console.log(response);
//     return response.json() //is function se humara data readeable banjata hai or hume ek or promise return karta hai.
//     }).then((data) => {
//         console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   }); //koi error aayega to catch method me catch ho ajyega

//------------------using fetch with async-await--------------------------

// -----------------------------------axios-------------------------

// axios ek library hoti hai jise se hum http request create karte hai.
// axios ko use karke hum http request bhej sakte hai.
// axios ko use karne ki jarrorat kyu padi agar humare pass already fetch method tha to ?
// actually fetch method ke andere humare pass response aa raha tha wo readable stream tha lekin
// exact json data nahi tha lekin axios ke ander directly exact response aata hai uss tarike se parse
//nahi karna padta jis tarike se fetch ke ander karte hai better method mil jata hai data koacess kar neka.

// note axios ek library hai to usse install karna padta hai ya cdn links se use kar sakte

// let btn = document.querySelector("button");

// btn.addEventListener("click", async() => {
//   let outPut = await getfact();
//   console.log(outPut);
// let data = document.querySelector("#fact");
// data.innerText = outPut;

// });

// let url = "https://catfact.ninja/fact";
// async function getfact() {
//   try {
//     let res = await axios.get(url);
//     return res.data.fact;
//   } catch (e) {
//     console.log(e);
//   }
// }

// -------axios using dog api------------------------------

// let url = "https://dog.ceo/api/breeds/image/random";

// async function getData() {
// try{
//     let res = await axios.get(url);
//     return res.data.message;
// }
// catch(e){
// console.log(e);
// }
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click",async()=>{
//     let dogData = await getData();
//     let images = document.querySelector("#dogimg");
//     images.setAttribute("src",dogData)
// });

// -----------------sending header with api---------------
// axios sendind Headers
// const url = "https://icanhazdadjoke.com/";

// async function getjokes() {
//   try {
//     const config = { headers : { Accept : "application/json" } }; //ye header line html data ko json me convert ker degi.
//     let res = await axios.get(url,config);//config pass second argument
//     console.log(res.data.joke);
//   } catch (e) {
//     console.log(e);
//   }
// }
//note -> res.data karne per hume data html format me mil raha hai lekin hume data json format me chahiye.

// --------------axios upadinting query string---------------------
// let url = "http://universities.hipolabs.com/search?name=india"; //search?name=middle this is query string

// async function getData(country) {
//   try {
//     let res = await axios.get(url + country); //concat the url link and country value
//     return res.data;
//   } catch (e) {
//     console.log(e);
//     return [];
//   }
// }

// let btn = document.querySelector("#btn");
// btn.addEventListener("click", async () => {
//   let country = document.querySelector("input").value; //take value from input place holder
// //   console.log(country);
//   let collArr = await getData(country); //take collegeArr name from input and put college information api link
//   console.log(collArr);
//   show(collArr); //pass countryCollegeResult as argument in show function
// });

// function show(collegeArr) {
//   for (coll of collegeArr);
//   let colleageList = document.querySelector("#list");
//   colleageList.innerText = "";
//   console.log(coll.state-province)

  
//     let li = document.createElement("li");
//     li.innerText = coll.name;
//     colleageList.appendChild(li);

// }
