/** function 'average' calculates the average (arithmetic mean) 
of a given list of numbers. The function takes a single argument list, 
which is an array of numbers*/

function average(list) {
  let sum = 0;

  for (let num of list) {
    sum += num;
  }

  return sum / list.length;
}
console.log(average([3, 5, 7]));

module.exports = average;
