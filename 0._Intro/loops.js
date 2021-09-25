//Loops
// Hvis en funktion returnerer noget, er den funktionel

const favoriteThings = ["Ella", 420, true];


const newArr = [];

favoriteThings.forEach((element, index, array) => console.log(element, index, array));

/*favoriteThings.forEach(favoriteThing => {
newArr.push(`Ooh I like: ${favoriteThing}`);
});*/

// map returnerer en ny liste --> skal bruges til dankmemes 1-1
const newList = favoriteThings.map(favoriteThing => `Ooh I like: ${favoriteThing}`);


//console.log(newArr);
console.log(newList);


// filter --> filtrerer
const mine = favoriteThings.filter(favoriteThing => favoriteThing.length = 1);
console.log(mine)

console.log(new Date().toLocaleDateString('da-DK', { weekday: 'long' }));