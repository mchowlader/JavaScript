// //--callback funtion full idea and example--
// const square = num =>{
//     console.log(`square of ${num}: ${num*num}`)
// }
// square(5);

// //higherOrderFunction
// //j callback function ta receive korbe take bola hoy higher order function
// const higherOrderFunction = (number, callback) =>{
//     callback(number);
// }

// //ekhane square function ta callback function.
// higherOrderFunction(9, square);


// //callback function er another example
// const taskOne = () =>{
//     console.log("task1")
// }

// const dataLoading = () =>{
//     console.log("task2. data lodaing from database.")
// }
// //asynchronous create
// const taskTwo = () =>{
//     setTimeout(dataLoading, 2000);
// }
// const taskThree = () =>{
//     console.log("task3")
// }
// const taskFour = () =>{
//     console.log("task4")
// }
// const taskFive = () =>{
//     console.log("task5")
// }

// taskOne();
// taskTwo();
// taskThree();
// taskFour();
// taskFive();

// //--callback function--
// //serially call hole asynchronous funtion er jonno wait kore then baki function gula call hobe.
// const task1 = (callback) =>{
//     console.log("task1");
//     callback(task2);
// }
// const task2 = (callback) =>{
//     setTimeout(() => {
//     console.log("task2. data loading.");
//     callback(task3);
//     }, 3000)
// }
// const task3 = (callback) =>{
//     console.log("task3");
//     callback(task4);
// }
// const task4 = (callback) =>{
//     console.log("task4");
//     callback(task5)
// }
// const task5 = () =>{
//     console.log("task5");
// }
// // //use old function .bellow are same
// // task1(function f1(){
// //     task2(function f2(){
// //         task3(function f3(){
// //             task4(function f4(){
// //                 task5()
// //             })
// //         })
// //     })
// // })

// //use arrow funtion 
// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => {
//                 task5()
//             })
//         })
//     })
// })


// //--asynchronous program example--
// console.log("Hi...!")
// document.querySelector("button").addEventListener("click", ()=>{
//     console.log("button is clicked");
// })
// console.log("Bye...!")

