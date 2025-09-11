function add(num_1, num_2) {
    return num_1 + num_2
}

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