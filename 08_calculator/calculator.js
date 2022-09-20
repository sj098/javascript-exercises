const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(a) {
	let total = 0;
  if (a.length === 0) {
    return 0
  }
  else {
    for (item of a) {
      total += item
    }
  }
  return total
};

const multiply = function(a) {
  let total = 1;
  for (item of a) {
    total = total * item
  }
  return total
};

const power = function(a, b) {
	let i = 0;
  let total = 1;
  while (i < b) {
    total *= a;
    i++;
  }
  return total;
};

const factorial = function(a) {
  let total = 1;
  if (a < 1) {
    return total;
  } else {
    while (a > 0) { 
      total *= a;
      a--;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
