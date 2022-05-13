console.clear();
// //array destructure
// let numbers = [10,20,30,40];
// let [num1, num2, num3,num4] = numbers;
// console.log(num1);
// console.log(num2);

// //array destruction use spreate operator
// let numbers = [10,20,30,40];
// let [num1,num2, ...z] = numbers;
// console.log(z);

// //swap variablw useing destructure
// let a=10, b=20;
// [a,b] = [b,a]
// console.log(`a = ${a} b = ${b}`);

// //object declare
// const studentInfo = {
//     id: 1,
//     name: "Mithun",
//     gpa: 4.50
// }
// console.log(studentInfo.id);
// console.log(studentInfo.name);
// console.log(studentInfo.gpa);

//object destructure using es6
// const {id, name} = studentInfo;
// console.log(id);
// console.log(name);

// //nested object desturcture
// const studentInfo = {
//     id: 1,
//     name: "Mithun",
//     gpa: 4.50,
//     language: {
//         native: "C#",
//         begineer: "JavaScript"
//     }
// }

// const {name,language} = studentInfo;
// console.log(name);
// console.log(language.native);

//destructing function perameter
const studentInfo = ({id, fullNmae}) =>{

    console.log(`id: ${id}\nName: ${fullNmae}`)
}

const student = {
    id:1,
    fullNmae: "Mithun"
} 
studentInfo(student);