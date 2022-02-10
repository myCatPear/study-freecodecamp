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