//promise, promise distructing, promise race
console.clear();


console.log("Welcome");

// //how to create promise- pending, resolve, reject(we can use 3 perameter, but if we want we can use 2 perameter)
// const promiseOne = new Promise((resolve, reject) =>{
//     let completePromise = true;
//     if(completePromise){
//         resolve("promise complete successfully.");
//     }
//     else{
//         reject("promise reject.");
//     }
// });

// //promise anothere example
// //we can declare two perameters but if we want we can use only one perameter.
// const promiseTwo = new Promise((resolve, reject)=> {
//     resolve("promise resolve successfully.");
// });

//console.log(promiseOne);


// promiseOne.then(res =>{
//     console.log(res);
// }).catch((err) =>{
//     console.log(`${err}`);
// });

// promiseTwo.then((res) => console.log(res));

// //print multiple promise at a time
// Promise.all([promiseOne, promiseTwo])
// .then((res) => console.log(res));

// //if we want we can run multiple promise run at a time.
// //--promise destructring example--
// Promise.all([promiseOne, promiseTwo]).then(([res1, res2]) => {
//     console.log(res1)
//     console.log(res2)
// });




//--promise race example--

//create promise3
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("complete promise3 in promise race example1.")
    }, 2000);
});

//create promise34
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("complete promise4 in promise race example2.");
    }, 1000);
});

//promise race syntax
//style1 and style2 both are same but different style syntax

//style1
Promise.race([promise3, promise4]).then((res) =>{
    console.log(res);
});

//style2
Promise.race([promise3, promise4]).then(res => console.log(res))


 console.log("Bye");

