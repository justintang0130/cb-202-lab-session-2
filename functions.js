function add(num_1, num_2) {
    return num_1 + num_2
}

const multiply = (num_1, num_2) => {
    return num_1 * num_2
}

const multiply_function = multiply(2, 7)
console.log(multiply_function)

function checkIfFriday(day) {
    if (day === "Friday") {
        console.log("It's Friday!!")
    }   else {
        console.log("It's not Friday...")
    }
    return day
}

console.log(add(1,1))
console.log(checkIfFriday("Friday"))

/*
creates favorite pizza variable
*/
const fav_pizza = "Pepperoni"

switch (fav_pizza) {
    case "Hawaiian":
        console.log("You like Hawaiian pizza")
        break;
    case "Plain":
        console.log("You like plain pizza")
        break;
    case "Pepperoni":
        console.log("You like pepperoni pizza")
        break;
    default:
        console.log("You don't like pizza at all")
}

/*
prints a random number from 1-6
*/
console.log(Math.floor(Math.random() * 6) + 1)

function random_number() {
    const num = Math.floor(Math.random() * 6) + 1
    return num
}

const randomNum = random_number()
console.log(randomNum)


