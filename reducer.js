const arr = [1, 2, 3, 4];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(arr.reduce(reducer));

console.log(arr.reduce(reducer, 5));

/*
The reduce() method executes a reducer function (that you provide)
on each element of the array, resulting in a single output value.

The reducer function takes four arguments:

1. Accumulator (acc)
2. Current Value (cur)
3. Current Index (idx)
4. Source Array (src)

Your reducer function's returned value is assigned to the accumulator,
whose value is remembered across each iteration throughout the array,
and ultimately becomes the final, single resulting value.

arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])

*/

let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})
}

let groupedPeople = groupBy(people, 'age')

console.log(JSON.stringify(groupedPeople));