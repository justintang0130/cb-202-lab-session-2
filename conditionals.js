/*
set temperature
*/
const temp = 40

/*
set if else statements
*/
if (temp <= 65) {
    console.log("It's cold")
}   else if (temp <= 70) {
    console.log("It's fine out")
}   else {
    console.log("It's hot outside")
}

/*
set grade
*/
const grade = 50

/* 
set letter grades
*/
if (grade >= 90) {
    console.log("You got an A")
}   else if (grade >= 80) {
    console.log("You got a B")
}   else if (grade >= 70) {
    console.log("You got a C")
}   else if (grade >= 60) {
    console.log("You got a D")
}   else {
    console.log("You failed")
}

let feedback;
feedback = grade > 70 ? "You passed" : "You failed"
console.log(feedback)

switch (grade) {
    case grade > 90:
        console.log("You got an A")
}