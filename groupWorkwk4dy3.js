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
// console.log(dart)

// Porgee decides that Wolfy can't be named "Wolfy" anymore.
// Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".

wolfy.splice(0, 1, 'Gameboy')
// console.log(wolfy)

// Yell at the Ninja Turtles
// Create an array with the members of the 
// ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// Use a for of loop(not a typo - try it out! Try a for ofloop) 
// to call toUpperCase()on each of them and print out the result.
// As a developer, you'll be a lifelong learner and constantly encountering new things. 
// We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own. You've got this!

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

for (let turtles of ninjaTurtles) {
    // console.log(turtles.toLocaleUpperCase())
}

// Methods, Revisited
// Here is a list of favMovies:

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// Console log: the index of Titanic
// console.log(favMovies.indexOf('Titanic'))
// Do the following and console.log the final results (I have included some thought questions, you don't have to write out an answer for those marked as such):
// Note: if you have to add to the array, feel free to add any movie you'd like

// use the .sortmethod Thought question: what did this do to the array? Did it permanently alter it?
// favMovies.sort()
// console.log(favMovies)
// Use the method pop
// favMovies.pop()
// console.log(favMovies)
// push"Guardians of the Galaxy"
// favMovies.push("Guardians of the Galaxy")
// // Reverse the array
// // console.log(favMovies)
// favMovies.reverse()
// console.log(favMovies)

// Use the shiftmethod
// favMovies.shift()
// unshift- what does it return?
// console.log(favMovies.unshift()) // return the total number of elements in the array.
// console.log(favMovies)
// // splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
// let index = favMovies.indexOf("Django Unchained")
// favMovies.splice(index, 1, "Avatar")
// console.log(favMovies)
// slicethe last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
let arrayLength = favMovies.length
// console.log(arrayLength)
let getHalf = Math.floor(arrayLength / 2)
// console.log(getHalf)
// console.log(favMovies.slice(getHalf))
// console.log(newfavMovies)

// store the value of your slicein a variable, console.log it - Thought question: what is going on here?
let halfArray = favMovies.slice(getHalf)
// console.log your final results
// console.log(halfArray)
// // After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
// console.log(halfArray.indexOf("Fast and Furious"))
// Thought question: that we declared the variable favMovieswith const, and yet, we were allowed to change the array. Weird? Should we have used let?

// Where is Waldo
// With the following multi-dimensional array
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
["Lucinda", "Jacc", "Neff", "Snoop"],
["Petunia", ["Baked Goods", "Waldo"]]];
// Remove Eggbert (hint look at the slice/splice method(s))
whereIsWaldo.splice(1, 1)
// console.log(whereIsWaldo)
// Change "Neff" to "No One"
whereIsWaldo[1][2] = "No One"
// Access and console.log "Waldo"
// console.log(whereIsWaldo[2][1][1])
// console.log(whereIsWaldo)

// Excited Kitten
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
// Hint 1
// Hint 2
// Hint 3
// Hint 4
// Hint 5
// Hint 6

const msg = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "why does the red dot always get away..."]


// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(msg[Math.floor(Math.random()) * msg.length])
//     }
// }

// Find the Median  
// Find the median number in the following numsarray, then console.log that number.
// hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )
const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];

nums.sort()
// console.log(nums)
// console.log(nums[Math.floor(nums.length / 2)])

// Expected output:
// => 15

// Hungry for More?
// Choose one that you didn't get to solve in lab


// Return of the Closets
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
        // These are Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
    ], [
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ], [
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];

// Kristyn's left shoe has traveled through time and
// space and turned up in Thom's accessories drawer! Remove Kristyn's
// shoe from the array and save it to the variable kristynsShoe.
// Use that variable to add Kristyn's lost shoe to Thom's accessories array.

let kristynsShoe = kristynsCloset.shift()
// console.log(kristynsShoe)

// thomsCloset.push(kristynsShoe)

// thomsCloset[2][3] = kristynsShoe //- method 1
thomsCloset[2].splice(3, 0, kristynsShoe)  //- method 2

// console.log(thomsCloset)

// Dress Us Up
// Modify your code to put together 3 separate outfits for Kristyn and Thom.
// Put the output in a sentence to tell us what we'll be wearing. Mix and match!

// console.log(`Kristyn is wearing ${kristynsCloset[0]}, ${kristynsCloset[2]} and ${kristynsCloset[3]}.`)

// console.log(`Thom is wearing ${thomsCloset[0][2]}, ${thomsCloset[1][0]} and ${thomsCloset[2][2]}.`)

// Dirty Laundry
// Continue looking at the closet arrays:

// Time to do laundry - loop through Kristyn's closet and log the sentence
// "WHIRR: Now washing (item)" for each item in the array.

// for (let laundry of kristynsCloset) {
//     console.log(`WHIRR: Now washing ${laundry}`)
// }

console.log(thomsCloset[0])
console.log(thomsCloset[1])
console.log(thomsCloset[2])