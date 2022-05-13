console.clear();
//--array find method--

// //use arrow 
// let numbers = [15,21,55,20];
// let evenNumber = numbers.find(x => x%2===0);
// console.log(evenNumber);

// //use funtion 
// let numbers = [15,21,55,20];
// const evenNumber = (value, index, arr) =>{
//     if(value%2===0)
//     return value;
// }
// let firstEvenNumber = numbers.find(evenNumber);
// console.log(firstEvenNumber);

// //--array findIndex method--

// let numbers = [15,21,55,20];
// const evenNumber = (value, index, arr) =>{
//     if(value%2===0)
//     return value;
// }
// let firstEvenNumberIndex = numbers.findIndex(evenNumber);
// console.log(firstEvenNumberIndex);

// //array find method use object
// const studentInfo = [
//     {
//         id: 1,
//         gpa: 2.50
//     },
//     {
//         id: 2,
//         gpa: 3.50
//     },
//     {
//         id: 3,
//         gpa: 4.50
//     },
//     {
//         id: 4,
//         gpa: 5
//     },
// ]
// console.log(studentInfo.find(x => x.gpa > 4));