function Student(name, age)
{
    this.name;
    this.age = age;

    this.display = function()
    {
        console.log(name);
        console.log(age);
    }
}

var student1 = new Student("Mithun", 26);
var student2 = new Student("Rinku", 18);

student1.display();
student2.display();