console.clear();

const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve("task 1 complete.");
    });
};

const taskTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task 2 complete.");
        }, 2000);
    });
};

const taskThree = () => {
    return new Promise((resolve, reject) => {
        reject("task 3 is not complete.");
    });
};

const taskFour = () => {
    return new Promise((resolve, reject) => {
        resolve("task 4 complete.");
    });
};


//chaing er khetre ekta catch e use kora hoy.
//chaing er khetre ekta reject hole porer baki function gula print korbe na.
taskOne()
.then((res) => console.log(res))
.then(taskTwo)
.then((res) => console.log(res))
.then(taskThree)
.then((res) => console.log(res))
.then(taskFour)
.then((res) => console.log(res))
.catch((res) => console.log(res)); 