// you fill in some sample weekly miles traveled in this array
const weeklyMiles = [5, 10, 15, 20]
//declare a variable to store the total. Initial value is 0
let totalMiles = 0

/*
iterate the array of miles with a for...of loop.
add each milege to the total mileage variable.
*/

for (const day of weeklyMiles) {
    totalMiles += day
}

// declare a new variable to store the average miles over time

const averageMiles = totalMiles / weeklyMiles.length

//Output the average miles and the total miles to the console

console.log(`I average ${averageMiles} each week.`)
console.log(`I have driven a total of ${totalMiles} miles.`)