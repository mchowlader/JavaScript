class Student{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    //set declare
    set studnetName(name){
        this.name = name;
    }

    //get
    get studentInfo(){
        return this.id + " " + this.name;
    }
}

let s1 = new Student(1, "Mithun");
console.log(s1);

//set call
s1.studnetName = "Howlader";
console.log(s1.name);

//get call
console.log(s1.studentInfo);