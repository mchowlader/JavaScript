console.clear();

//----default perameter old funciton----

// function message(text = "hello Barisal")
// {
//     console.log(text);
// }

// message();
// message("Hello Bangladesh");


//default perameter with es6 syntax
// const Display = (text = "Hello Jquery !") => 
// {
//     console.log(text);
// }

// Display("Hello JavaScript!");
// Display();


//--rest perameter--
// "use strict"
// function printNumber(x,y, ...z)
// {
//     console.log(`x = ${x} y = ${y} z = ${z}`);
//     for(var i = 1; i <z.length; i++)
//     {
//         console.log(z);
//     }
// }

// printNumber(10,20,30,40,4,5,6,7)

//---sprate operatopr---

// function addNumber(x,y,z)
// {
//     return x+y+z;
// }

// let number = [1,2,3]
// let number1 = [5,...number, 4]

// //console.log(addNumber(...number));
// console.log(number1);


//concating
// let array1 = [4,5,6];
// let array2 = [1,2,3];

// //let arrays = array2.concat(array1);
// //console.log(arrays);

// //without concat , we can use spread operator

// let arrays = [...array1,...array2];
// console.log(arrays);


//spread operatior use on object
let p1 = {
    name: "Mithun",
    age: "30"

}

let p2 ={
    nationality: "Bangladesh",
    occupation: "Student"
}

let p = {...p1, ...p2}
console.log(p);

