//========================
// Part.II  
//=======================
// 1. Easy Going

// Write a for loop that will log the numbers 1 through 20.

for (let i = 1; i <= 20; i++) {
    // console.log(i)
}

// 2. Get Even
// Write a for loop that will log only the even numbers in 0 through 200.

// Hint: Think about the increment expression.

for (let i = 0; i <= 200; i += 2) {
    // console.log(i)
}

// 3. Fizz Buzz
// This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz")
//     } else if (i % 3 === 0) {
//         console.log('Fizz')
//     } else if (i % 5 === 0) {
//         console.log('Buzz')
//     } else console.log(i)
// }

// Wild Wild Life
// Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant", 5000, "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]

// Plantee just had her birthday; change Plantee's array 
// to reflect her being a year older.

plantee[2] = 5001
// console.log(plantee)

// Change Wolfy's hometown
// from "Yukon Territory" to "Gotham City".

wolfy[3] = 'Gotham City'
// console.log(wolfy)

// Give D'Art a 
// second hometown by adding "Hawkins"
dart.push('Hawkins')
console.log(dart)

// Porgee decides that Wolfy can't be named "Wolfy" anymore.
// Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".

// wolfy.splice(0, 1, 'Gameboy')
// console.log(wolfy)