
console.clear()

var students =[
    {
        Id: 101,
        Name: "Mithun",
        GPA: 4.50
    },
    {
        Id: 102,
        Name: "Rinku",
        GPA: 5.00
    },
    {
        Id: 103,
        Name: "Ripon",
        GPA: 2.50
    },
    {
        Id: 104,
        Name: "Mizan",
        GPA: 3.50
    },
    {
        Id: 105,
        Name: "Miskat",
        GPA: 2.70
    }

]

//console.log(students);


//difference between traditonal function

// //traditional function
// function studentsName(){
//     return students.filter(function(x){
//         return x.GPA > 3;
//     }).map(function(y){
//         return y.Name;
//     });
// } 
// console.log(studentsName());

//arrow function
const studentsName = () => students.filter((x) => x.GPA > 3).map((y) => y.Name);
console.log(studentsName());