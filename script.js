/*
 * Prompt 1:
 *
 * Declare a variable called myFavoriteSong on one line and console.log the value
 * Then, using your Literals, console.log "my favorite song is..." with the song's value
 */
const myFavoriteSong = "Reputation"
console.log("My favorite song is " + myFavoriteSong)
/*
 * Prompt 2:
 *
 * Create 3 variables using let and const, then console.log each of them, using a string literal (` ${} `} in the log
 */ 
const myDog= 'Bella'
let myLocation= "Atlanta, GA"
let myBirthday= "May 25"

console.log(`My name is ${myDog} I am from ${myLocation} i was born on ${myBirthday}`)

/*
 * Prompt 3:
 *
 * Create a variable and assign a number to it. On a separate line for each, using console.log:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */
let myAge = 25
console.log(myAge + 30)
console.log(myAge - 10)
console.log(myAge * 3)
console.log(myAge / 7)
console.log(myAge % 2)
/*
 * Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables.
 * Run a console.log that says 'hello my name is..." with your fullName. 
 */
const firstName = `Jake`
const lastName = `Pagnotto`
const fullName = firstName + "" + lastName 

console.log(fullName)

/* Arrays */

// Create an array of Movies, then log the 2nd movie in your array
// Use your array methods to add a movie in to the Front of the array, then the Back of the Array, then to the 2nd index point of the array
let Movies = ['Alien Romulus', 'Bettlejuice Bettlejuice', 'Speak No Evil'];
Movies.unshift('Smile 2');
Movies.push('Halloween');
let lastMovie = Movies.pop();
Movies.push('The Conjuring'); 
Movies.push(lastMovie);
console.log(Movies);

/*
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */

let array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion'];
let array2 = [
  ['Marty Feldman', 'Marty Marion'],
  ['Marty Stuart', 'Marty McFly'],
  ['Marty Jannetty', 'Marty Robbins']
];
let array3 = [
  ['Marty Feldman', ['Marty Marion']],
  ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']]
];
let part1 = array1[2];
console.log(part1);
let part2 = array2[1][1];
console.log(part2);
let part3 = array3[1][1][1];
console.log(part3);
/*
 *
 * Use the length of the array below to retrieve the second to last item.
 */

let array4 = ['a', 'b', 'c', 'd', 'e'];
let secondToLastItem = array4 [array4.length - 2];
/*
 *
 * Use the following arrays to answer the subprompts below.
 */

let thom = ['Thom', 1000, 'Christchurch'];
let karolin = ['Karolin', 16, 'New York'];
let kristyn = ['Kristyn', 5, 'Pittsburgh'];
let cathleen = ['Cathleen', 186, 'New York'];

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Tom".

// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.

// Change Cathleen's hometown from New York to "Gotham City".

// Remove "Pittsburgh" from Kristyn's array and add "Oakland".
thom[0] = `tom`
karolin[1] = `17`
cathleen[2] = `Gotham City`
kristyn[2] = `Oakland`
console.log(thom)
console.log(karolin)
console.log(cathleen)
console.log(kristyn)