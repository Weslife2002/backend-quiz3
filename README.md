# backend-quiz3

<!-- TABLE OF CONTENTS -->
## Table of Contents

- [backend-quiz3](#backend-quiz3)
  - [Table of Contents](#table-of-contents)
  - [Quiz requirement](#quiz-requirement)
    - [Quiz 1 requirement](#quiz-1-requirement)
    - [Quiz 2 requirement](#quiz-2-requirement)
  - [Quiz 1 Answer](#quiz-1-answer)
    - [JS native](#js-native)
    - [LoDash](#lodash)
    - [Comparison](#comparison)
  - [Quiz 2](#quiz-2)
    - [Set up and run](#set-up-and-run)

<!-- overview -->
## Quiz requirement

The below section lists the detail requirement of the quiz.

### Quiz 1 requirement

In the first task, I am required to list all object and arrays manipulation functions available in Array-native, JavaScript-native and LoDash.
My answer is written on the section [Quiz 1 Answer](#quiz-1-answer)

### Quiz 2 requirement

In the seond task, I am required to write two files - Scale.js and main.js in which:

- Scale.js implements the class Scale that has 3 methods:
  - constructor(): Initialize the class with an array include the weight of 12 coins, in which one is heavier or lighter than another.
  - weigh(left, right): Take in two array contains coins' index and return 1 if the left is hevier than the right, 2 if the left is equals to the right and 3 for the last case.
  - checkResult(faultIndex, heavier): Take in the index of the fault coin and true if the fault coin is heavier, false if the fault coin is lighter. However, if the user use the function checkResult more than one time, the function will always return false.
- Main.js implements the function findFaultCoint that applys the optimized algorithm for solving the problem without accessing the private data of the Scale class.

[back to top](#backend-quiz3)

<!-- GETTING STARTED -->
## Quiz 1 Answer

### JS native

- forEach()

This method can help you to loop over array’s items.

```js
  const arr = [1, 2, 3, 4, 5, 6]
  arr.forEach(item => {
    console.log(item * 2); // output: 2 4 5 8 10 12
  })
```

- includes()

This method check if array includes the item passed in the method.

```js
  const arr = [1, 2, 3, 4, 5, 6]
  arr.includes(2); // output: true
  arr.includes(7); // output: false
```

- filter()

This method create new array with only elements passed condition inside the provided function.

```js
  const arr = [1, 2, 3, 4, 5, 6]
  arr.filter(x => x % 2 === 0);  // arr = [2, 4, 6]
```

- map()

This method create new array by calling the provided function in every element.

```js
  const arr = [1, 2, 3, 4, 5, 6]
  const newArr = arr.map(num => num*2); // newArr = [2, 4, 6, 8, 10, 12]
```

- reduce()

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
  const arr = [1, 2, 3, 4, 5, 6];
  const sum = arr.reduce((total, value) => total + value, 0); // sum = 21
```

- some()

This method check if at least one of array’s item passed the condition. If passed, it return ‘true’ otherwise ‘false’.

```js
  const arr = [1, 2, 3, 4, 5, 6];

  // at least one element is greater than 4?
  const largeNum = arr.some(num => num > 4);
  console.log(largeNum); // output: true

  // at least one element is less than or equal to 0?
  const smallNum = arr.some(num => num <= 0);
  console.log(smallNum); // output: false
```

- every()

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
  const arr = [1, 2, 3, 4, 5, 6];

  const sum = arr.reduce((total, value) => total + value, 0);
  console.log(sum); // 21
```

- sort()

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
  const arr = [1, 2, 3, 4, 5, 6];

  const sum = arr.reduce((total, value) => total + value, 0);
  console.log(sum); // 21
```

- slice(begin, end)

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
  const arr = [1, 2, 3, 4, 5, 6];

  const sum = arr.reduce((total, value) => total + value, 0);
  console.log(sum); // 21
```

- of()

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
  const arr = [1, 2, 3, 4, 5, 6];

  const sum = arr.reduce((total, value) => total + value, 0);
  console.log(sum); // 21
```

- reduceRight()

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
  const arr = [1, 2, 3, 4, 5, 6];

  const sum = arr.reduce((total, value) => total + value, 0);
  console.log(sum); // 21
```

- copyWithin()

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
  const arr = [1, 2, 3, 4, 5, 6];

  const sum = arr.reduce((total, value) => total + value, 0);
  console.log(sum); // 21
```

- unshift()

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
  const arr = [1, 2, 3, 4, 5, 6];

  const sum = arr.reduce((total, value) => total + value, 0);
  console.log(sum); // 21
```

- shift()

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
  const arr = [1, 2, 3, 4, 5, 6];

  const sum = arr.reduce((total, value) => total + value, 0);
  console.log(sum); // 21
```

- reverse()

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
  const arr = [1, 2, 3, 4, 5, 6];

  const sum = arr.reduce((total, value) => total + value, 0);
  console.log(sum); // 21
```

- from()

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
  const arr = [1, 2, 3, 4, 5, 6];

  const sum = arr.reduce((total, value) => total + value, 0);
  console.log(sum); // 21
```

- concat()

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
  const arr = [1, 2, 3, 4, 5, 6];

  const sum = arr.reduce((total, value) => total + value, 0);
  console.log(sum); // 21
```

- join()
  
The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
  const arr = [1, 2, 3, 4, 5, 6];

  const sum = arr.reduce((total, value) => total + value, 0);
  console.log(sum); // 21
```

### LoDash

- forEach()

This method can help you to loop over array’s items.

```js
  const arr = [1, 2, 3, 4, 5, 6]
  arr.forEach(item => {
    console.log(item * 2); // output: 2 4 5 8 10 12
  })
```

- includes()

This method check if array includes the item passed in the method.

```js
  const arr = [1, 2, 3, 4, 5, 6]
  arr.includes(2); // output: true
  arr.includes(7); // output: false
```

- filter()

This method create new array with only elements passed condition inside the provided function.

```js
  const arr = [1, 2, 3, 4, 5, 6]
  arr.filter(x => x % 2 === 0);  // arr = [2, 4, 6]
```

- map()

This method create new array by calling the provided function in every element.

```js
  const arr = [1, 2, 3, 4, 5, 6]
  const newArr = arr.map(num => num*2); // newArr = [2, 4, 6, 8, 10, 12]
```

- reduce()

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
  const arr = [1, 2, 3, 4, 5, 6];
  const sum = arr.reduce((total, value) => total + value, 0); // sum = 21
```

- some()

This method check if at least one of array’s item passed the condition. If passed, it return ‘true’ otherwise ‘false’.

```js
  const arr = [1, 2, 3, 4, 5, 6];

  // at least one element is greater than 4?
  const largeNum = arr.some(num => num > 4);
  console.log(largeNum); // output: true

  // at least one element is less than or equal to 0?
  const smallNum = arr.some(num => num <= 0);
  console.log(smallNum); // output: false
```

- every()

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
  const arr = [1, 2, 3, 4, 5, 6];

  const sum = arr.reduce((total, value) => total + value, 0);
  console.log(sum); // 21
```

- sort()

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
  const arr = [1, 2, 3, 4, 5, 6];

  const sum = arr.reduce((total, value) => total + value, 0);
  console.log(sum); // 21
```

- slice(begin, end)

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
  const arr = [1, 2, 3, 4, 5, 6];

  const sum = arr.reduce((total, value) => total + value, 0);
  console.log(sum); // 21
```

- of()

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
  const arr = [1, 2, 3, 4, 5, 6];

  const sum = arr.reduce((total, value) => total + value, 0);
  console.log(sum); // 21
```

- reduceRight()

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
  const arr = [1, 2, 3, 4, 5, 6];

  const sum = arr.reduce((total, value) => total + value, 0);
  console.log(sum); // 21
```

- copyWithin()

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
  const arr = [1, 2, 3, 4, 5, 6];

  const sum = arr.reduce((total, value) => total + value, 0);
  console.log(sum); // 21
```

- unshift()

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
  const arr = [1, 2, 3, 4, 5, 6];

  const sum = arr.reduce((total, value) => total + value, 0);
  console.log(sum); // 21
```

- shift()

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
  const arr = [1, 2, 3, 4, 5, 6];

  const sum = arr.reduce((total, value) => total + value, 0);
  console.log(sum); // 21
```

- reverse()

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
  const arr = [1, 2, 3, 4, 5, 6];

  const sum = arr.reduce((total, value) => total + value, 0);
  console.log(sum); // 21
```

- from()

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
  const arr = [1, 2, 3, 4, 5, 6];

  const sum = arr.reduce((total, value) => total + value, 0);
  console.log(sum); // 21
```

- concat()

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
  const arr = [1, 2, 3, 4, 5, 6];

  const sum = arr.reduce((total, value) => total + value, 0);
  console.log(sum); // 21
```

- join()
  
The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```js
  const arr = [1, 2, 3, 4, 5, 6];

  const sum = arr.reduce((total, value) => total + value, 0);
  console.log(sum); // 21
```

### Comparison

## Quiz 2

### Set up and run

_Below is how use can run my code in your computer._

- Clone my respository by running the command below.

  ```sh
   git clone https://github.com/Weslife2002/backend-quiz3.git
   ```

- Access the file and run the command below.

  ```sh
   Node main.js
   ```

- 1000 test cases for the problems are generated and the result is shown.

[back to top](#backend-quiz3)
