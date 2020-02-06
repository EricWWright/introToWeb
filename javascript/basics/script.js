let a = 5;
console.log(a);

a = "Fred";
console.log(a);

a = false;
console.log(a);

a = [3, "Joe", true, 'Sally', 23];
console.log(a);

a.push("Kevin");
console.log(a);

a.pop();
console.log(a);

a.unshift("Wes");
console.log(a);

a.shift();
console.log(a);

let fish = [1, 2, "red", "blue"];
a.push(fish);
console.log(a);
console.log(a[5][2]);

let bob = {
    name: "Bob",
    age: 21,
    species: "zombie",
    hobbies: [
        "eating brains",
        "walking aimlessly",
        "moaning"
    ]
};

console.log(bob.hobbies[1]);

for(let i=0; i<5; i++) {
    console.log(i);
    if(i == 2) {
        console.log("Wow.");
    };
};

function hello(name) {
    console.log("Hello " + name);
};
hello("Baby Yoda");

let bye = function(name) {
    console.log("Goodbye " + name);
};

bye("Baby Yoda");

let howdy = name => {
    return `<h1>Howdy ${name}</h1>`;
};

console.log(howdy("Undead Wes"));

function Person(name, age) {
    this.name = name;
    this.age = age;
};

let dave = new Person("Dave", 53);
dave.age++;
console.log(dave.age);

let stuff = document.getElementById("stuff");
stuff.innerHTML = howdy("Baby Yoda");