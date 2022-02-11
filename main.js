// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);

// Setup
function compareEquality(a, b) {
  if (typeof(a) == typeof(b)) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

function testLogicalAnd(val) {
  // Only change code below this line

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);
// 

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if (strokes == 1) return "Hole-in-one!";
else if (strokes <= par - 2	) return "Eagle";
else if (strokes == par - 1 ) return "Birdie";
else if (strokes == par  ) return "Par";
else if (strokes == par + 1) return "Bogey";
else if (strokes == par + 2 ) return "Double Bogey";
else if (strokes >= par + 3) return "Go Home!";


  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);

// 

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch(val) {
  case 1: 
    answer = 'alpha';
    break;
  case 2: 
    answer = 'beta';
    break;
  case 3:
    answer = 'gamma'
    break;
  case 4: 
  answer = 'delta'
  break;
}
  // Only change code above this line
  return answer;
}

caseInSwitch(1);

//

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line

switch (val) {
  case 'a':
    answer = 'apple';
    break;
  case 'b':
    answer = 'bird';
    break;
  case 'c':
    answer = 'cat';
    break;
    default:
    answer = 'stuff';
}

  // Only change code above this line
  return answer;
}

switchOfStuff(1);
//

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line

switch(val) {
  case 1:
  case 2:
  case 3:
    answer = "Low";
    break;
  case 4:
  case 5:
  case 6:
    answer = "Mid";
    break;
      case 7:
  case 8:
  case 9:
    answer = "High";
}

  // Only change code above this line
  return answer;
}

sequentialSizes(1);

//

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

switch(val) {
  case "bob":
    answer = "Marley"
    break;
  case 42:
    answer = "The Answer";
    break;
     case 1:
    answer = "There is no #1";
    break;
     case 99:
    answer = "Missed me by this much!";
    break;
     case 7:
    answer = "Ate Nine";
    break;
  
}
  // Only change code above this line
  return answer;
}

chainToSwitch(7);

//

function isLess(a, b) {
  // Only change code below this line
 return a < b;
  // Only change code above this line
}

isLess(10, 15);
//

// Setup
function abTest(a, b) {
  // Only change code below this line
if (a < 0 || b < 0) return;


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

//

let count = 0;

function cc(card) {
  // Only change code below this line

switch (card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  count +=1;
  break;

  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
  count -=1;
  break;
}
console.log(count + ' Bet')
  if (count > 0) return count + ' Bet'
  return count + ' Hold';
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

//

const myDog = {
  // Only change code below this line
name: 'Jox',
legs: 4,
tails: 1,
friends: []

  // Only change code above this line
};

//

// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

//

// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line

//

// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line

//


// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = 'Happy Coder'

//

const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = 'woof';

//

// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog.tails;

//

// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line

const lookup = {
  "alpha": "Adams",
   "bravo": "Boston",
    "charlie": "Chicago",
     "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank",
}
  // Only change code above this line
  result = lookup[val]
  return result;
}

phoneticLookup("charlie");

//

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

myMusic.push({
  'artist': 'x',
  'title': 'y',
  'release_year': 1990,
  'formats': ['','']
})

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside['glove box'];

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop != 'tracks' && value !== '') records[id][prop] = value;  
  else if (prop == 'tracks' && !records[id].hasOwnProperty('tracks')) records[id].tracks = [value];
  else if (prop == 'tracks' && value != '') records[id].tracks.push(value);
  else delete records[id][prop];

  return records;


}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// Setup
const myArray = [];

// Only change code below this line
let i = 5;
while ( i > -1) {
  myArray.push(i);
  i--;
}

// Setup
const myArray = [];

// Only change code below this line

for (let i = 1; i <= 5; i +=1) {
  myArray.push(i)
}


const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
const myArray = [];

// Only change code below this line

for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for (let i = 0; i <= myArr.length-1; i++) {
   total += myArr[i];
}

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    product *= arr[i][j];
  }
}
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
if (i == 10) myArray.push(i);
i +=1;
console.log(i)
} while (i != 11); 

function sum(arr, n) {
  // Only change code below this line
if (n <= 0) {
  return 0;
} else {
  return sum(arr, n -1) + arr[n-1];
}
  
  // Only change code above this line
}

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
console.log(result)

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
console.log(result)

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line