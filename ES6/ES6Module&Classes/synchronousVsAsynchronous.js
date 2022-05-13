console.clear();


// //synchronous 
// const taskOne = () =>{
//     console.log("task1")
// }
// const taskTwo = () =>{
//     console.log("task2")
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

//Asynchronous

const taskOne = () =>{
    console.log("task1")
}

const dataLoading = () =>{
    console.log("task2. data lodaing from database.")
}
//asynchronous create
const taskTwo = () =>{
    setTimeout(dataLoading, 2000);
}
const taskThree = () =>{
    console.log("task3")
}
const taskFour = () =>{
    console.log("task4")
}
const taskFive = () =>{
    console.log("task5")
}

taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();
