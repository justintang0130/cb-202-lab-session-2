/*
set costs and funds
*/
let cost = 0
let funds = 15

/*
set menu
*/
let chicken_flavor_one = "Honey Garlic"
let chicken_flavor_two = "Soy Garlic"
let chicken_flavor_three = "Spicy"

/*
set prices
*/
const chicken_cost_one = 5
const chicken_cost_two = 6
const chicken_cost_three = 7

/*
calculate cost
*/
cost += chicken_cost_one + chicken_cost_three

/*
add tax, multiply by 1.1
*/
cost *= 1.1

/*
print out total and check if funds are enough
*/
console.log(cost)
console.log(funds > cost)

/*
set password variables
*/
let password = "justintang"
let confirmPassword = "justintang"

/*
use strict operator to check boolean
*/
console.log(password === confirmPassword)

/*
set booleans
*/
let hasTicket = true
let isGuest = true

/*
checks if they have a ticker or a guest
*/
let canEnter = hasTicket && isGuest
console.log(canEnter)