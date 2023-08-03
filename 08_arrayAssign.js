

let array = [4, 5, 4, 5, 7, 8, 9, 7, 8];
let sachinArray = [];

for (const element of array) {
  if (!sachinArray.includes(element)) {
    sachinArray.push(element);
  }
}

console.log(sachinArray);

