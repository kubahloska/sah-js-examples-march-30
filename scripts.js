console.log("Break until 17:10");

console.log("JavaScript is working!");

let colors = ["orange", "blue", "green", "purple"];

let post = {
    title: "My Post",
    descriptions: "My First post, awesome",
    likeCount: 12,
    comments: ["cool!", "nice job!"]
};

let posts = [{
    title: "First post",
    likeCount: 12
}, {
    title: "Second post",
    likeCount: 222
}];

console.log(colors);
console.log(post);

let age = 18;

if (age >= 18) {
    console.log("you're an adult!");
} else {
    console.log("you're a kid!");
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log(colors);

let myFunction = x => {
    console.log(x);
}

let greeter = name => {
    console.log(`Hello, ${name}`);
    if (name === "Jakub") {
        console.log("he's an adult");
    }
    if (name === "Mate") {
        console.log("he's an adult");
    }
}

greeter("Jakub");
greeter("Peter");
greeter("Mate");
greeter("Reka");

colors.forEach(unicorn => {
    console.log(unicorn);
});

console.log("this is the end of our code");