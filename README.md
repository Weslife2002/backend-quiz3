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

### Quiz 1 requirement

In the first task, I am required to list all object and arrays manipulation functions available in Array-native, JavaScript-native and LoDash.
My answer is written on the section [Quiz 1 Answer](#quiz-1-answer)

### Quiz 2 requirement

In the seond task, I am required to write two files - Scale.js and main.js in which:

- **Scale.js** implements the class Scale that has 3 methods:
  - **constructor()**: Initialize the class with an array include the weight of 12 coins, in which one is heavier or lighter than another.
  - **weigh(left, right)**: Take in two array contains coins' index and return 1 if the left is hevier than the right, 2 if the left is equals to the right and 3 for the last case.
  - **checkResult(faultIndex, heavier)**: Take in the index of the fault coin and true if the fault coin is heavier, false if the fault coin is lighter. However, if the user use the function checkResult more than one time, the function will always return false.
- **algo.js** implements the function findFaultCoint that applys the optimized algorithm for solving the problem without accessing the private data of the Scale class.

[back to top](#backend-quiz3)

<!-- GETTING STARTED -->
## Quiz 1 Answer

### JS native

1. **push()**

    Put the element to the back of the array. Return the length of the current

    ```js
      const arr = [1, 2, 3, 4, 5, 6]
      arr.forEach(item => {
        console.log(item * 2); // output: 2 4 5 8 10 12
      })
    ```

2. **pop()**

    The pop() method remove the last element of the array, it will return the removed element.

    ```js
      const arr = [5, 12, 8, 130, 200];
      popElement = arr.pop(); // popElement: 200, arr: [5, 12, 8, 130]
    ```

3. **unshift()**

    The unshift() method adds one or more elements to the beginning of an array and returns its new length.

    ```js
      const array = [1, 2, 3, 4];
      array.unshift(5, 6, 10); // This will return 7. array: [5, 6, 10, 1, 2, 3, 4]
    ```

4. **shift()**

    The shift() method removes the first element from an array and returns the removed element changing the array's length.

    ```js
      const array = [1, 2, 3, 4];
      array.shift(); // This will return 1. array : [2, 3, 4]
    ```

    ![stack-queue](./img/stack_queue.png)

5. **slice()**

    The slice make a shallow copy for each element from index = begin to index = end -1, if end is negative, the end index is automatically assign as array.length + end.

    ```js
      let arr = [[1, 2, 3, 4, 5, 6], [1, 2, 5], [3, 5, 7]];
      let newArr = arr.slice(0, 2); // newArr = []
      newArr[0] = [1, 2, 100];
    ```

    ![slice](./img/slice.png)

6. **splice()**

    The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

    ```js
      let arr = [[1, 2, 3, 4, 5, 6], [1, 2, 5], [3, 5, 7]];
      let newArr = arr.slice(0, 2); // newArr = []
      newArr[0] = [1, 2, 100];
    ```

    ![splice](./img/splice.png)
    ![splice](./img/splice1.png)

7. **join()**

    The join() method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.

    ```js
      let arr = [[1, 2, 3, 4, 5, 6], [1, 2, 5], [3, 5, 7]];
      let newArr = arr.slice(0, 2); // newArr = []
      newArr[0] = [1, 2, 100];
    ```

    ![join](./img/join.png)

8. **filter()**

    This method create new array with only elements passed condition inside the provided function. If you make change to the element when filter it, the original element will also be changed.

    ```js
      const arr = [1, 2, 3, 4, 5, 6]
      arr.filter(x => x % 2 === 0);  // arr = [2, 4, 6]
    ```

    ![filter](./img/filter.png)

9. **map()**

    This method create new array by calling the provided function in every element. If you make change to the element while mapping, the original element will also be changed.

    ```js
      const arr = [1, 2, 3, 4, 5, 6]
      const newArr = arr.map(num => num*2); // newArr = [2, 4, 6, 8, 10, 12]
    ```

    ![map](./img/map.png)

10. **find()**

    Returns the value of the first element in the array that satisfies the provided testing function, or undefined if no appropriate element is found.

11. **findIndex()**

    Returns the index of the first element in the array that satisfies the provided testing function, or -1 if no appropriate element was found.

12. **findLast()**

    Returns the value of the last element in the array that satisfies the provided testing function, or undefined if no appropriate element is found.

13. **findLastIndex()**

    Returns the index of the last element in the array that satisfies the provided testing function, or -1 if no appropriate element was found.

    ![find](./img/find.png)

14. **reduce()**

    The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. If you make change to the element when accumulate, the original element will also be changed. Without the inital value, the reduce function will carry out with the first 2 elements. The third element if map function has will be from 0..n. The fourth element is the object that call the map function.

    ```js
      const arr = [1, 2, 3, 4, 5, 6];
      const sum = arr.reduce((total, value) => total + value, 0); // sum = 21
    ```

15. **fill()**

    The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

    ```js
      fill(value)
      fill(value, start)
      fill(value, start, end)
    ```

16. **includes()**

    This method check if array includes the item passed in the method.

    ```js
      const arr = [1, 2, 3, 4, 5, 6]
      arr.includes(2); // output: true
      arr.includes(7); // output: false
    ```

17. **some()**

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

18. **every()**

    The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

    ```js
      const arr = [1, 2, 3, 4, 5, 6];

      const sum = arr.reduce((total, value) => total + value, 0);
      console.log(sum); // 21
    ```

19. **forEach()**

    This method can help you to loop over array’s items. If you make change to the element when loop over it, the array will also be changed.

    ```js
      const arr = [1, 2, 3, 4, 5, 6]
      arr.forEach(item => {
        console.log(item * 2); // output: 2 4 5 8 10 12
      })
    ```

20. **sort()**

    The sort() method sorts the elements of an array in place.

    ```js
      let arr = [[1, 2, 3, 4, 5, 6], [1, 2, 5], [3, 5, 7]];
      arr.sort; // arr = [[1, 2, 3, 4, 5, 6], [1, 2, 5], [3, 5, 7];
      arr.sort((a, b) => a.length - b.length); // arr = [[1, 2, 5], [3, 5, 7], [1, 2, 3, 4, 5, 6]];
    ```

21. **concat()**

    The concat() method is used to merge two or more arrays and returns a new array build of this array joined with other arrays. Each element in the array is a shallow copy of the original element.

    ```js
      const array1 = [1, 2];
      const array2 = ['a', 'b', 'c'];
      const array = array1.concat(array2); // array = [1, 2, 'a', 'b', 'c'];
    ```

    _Note: You can use spread syntax instead of concat_

22. **findIndex()**

    The findIndex() method returns an index of the first item in an array that satisfies the provided testing function; otherwise, it returns -1, indicating no element passed the test. The findIndex() method executes a function once for each item present in an array. If you make change to the element in the step, the array will also be change.

    ```js
      const arr = [5, 12, 8, 130, 200];
      const condition = (element) => { 
        element += 10; 
        return element > 100
      };
      arr.findIndex(condition); // output: 3
    ```

23. **reduceRight()**

    The reduceRight() method executes the callback function once for each element present in the array, receiving four arguments: the initial value (or value from the previous callback call), the current element's value, the current index, and the array over which iteration is occurring.

    ```js
      const sum = [0, 1, 2, 3, 4].reduceRight(function(a, b) {
        return a + b;
      }); // sum = 10;
    ```

24. **reverse()**

    The reverse() method reverse all elements of an array.

    ```js
      const arr = [5, 12, 8, 130, 200];
      arr.reverse(); // arr: [200, 130, 8, 12, 5]
    ```

25. **from()**

    The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

    ```js
      console.log(Array.from('foo'));
      // expected output: Array ["f", "o", "o"]

      console.log(Array.from([1, 2, 3], x => x + x));
      // expected output: Array [2, 4, 6]
    ```

26. **of()**

    The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

    ```js
      Array.of(element0)
      Array.of(element0, element1)
      Array.of(element0, element1, /* … ,*/ elementN)
    ```

27. **length**

    Return the length of the array.

    ```js
      const arr = [5, 12, 8, 130, 200];
      arr.length; // output: 5
    ```

28. **spread syntax (...)**

    The spread syntax will make a shallow copy of each element from the original array.

    ```js
      const array = [5, 12, 8, 130, 200];
      const newArr = [1, 2, 3, 4, ...array]; // newArr = [1, 2, 3, 4, 5, 12, 8, 130, 200]
    ```

### LoDash

1. _.assign

    _.assign is the equivalent of the spread operator from ES6. It’s pretty easy to understand, it assigns properties of one or many objects to a source object.

    ```js
      const array = [5, 12, 8, 130, 200];
      const newArr = [1, 2, 3, 4, ...array]; // newArr = [1, 2, 3, 4, 5, 12, 8, 130, 200]
    ```

2. _.times

    _.times receives as arguments the number of iterations and a function to execute n times and returns an array of the results. Very useful when creating dynamic test data.

    ```js
      function getRandomInteger() {
        return Math.round(Math.random() * 100);
      }

      var result = _.times(5, getRandomNumber);
      // result => [64, 70, 29, 10, 23]
    ```

3. _.debounce

    _.debounce will invoke a function after a certain amount of time since the last time it was invoked.

    ```js
      function validateEmail() {
          // Validate email here and show error message if not valid
      }

      var emailInput = document.getElementById("email-field");
      emailInput.addEventListener("keyup", _.debounce(validateEmail, 500));
    ```

4. _.find

    Instead iterating through an array with a loop to find a specific object, we can simply use _.find. That’s nice, but this is not the only thing you can do with _.find. You can also find an object using multiple properties with a single line of code. Take a look!

    ```js
      var users = [
        { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
        { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
        { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
        { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
      ];

      var user = _.find(users, { lastName: "Doe", gender: "male" });
      // user -> { firstName: "John", lastName: "Doe", age: 28, gender: "male" }

      var underAgeUser = _.find(users, function(user) {
        return user.age < 18;
      });
      // underAgeUser -> { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" }
    ```

5. _.get and ._set

    For this one I will cheat a little bit by presenting 2 functions that do almost the same thing. _.get will return a property value from an object and _.set will, well you guessed it, set a property with a value. Nothing special except that you can access a property with its path.

    ```js
      var bar = { foo: { key: "foo" } };
      _.set(bar, "foo.items[0]", "An item");
      // bar => { foo: { key: "foo", items: ["An item"] } }
      var name = _.get(bar, "name", "John Doe");
      // name => John Doe
    ```

6. _.keyBy

    For this one I will cheat a little bit by presenting 2 functions that do almost the same thing. _.get will return a property value from an object and _.set will, well you guessed it, set a property with a value. Nothing special except that you can access a property with its path.

    ```js
      var posts = [
        { id: "1abc", title: "First blog post", content: "..." },
        { id: "2abc", title: "Second blog post", content: "..." },
        // more blog posts
        { id: "34abc", title: "The blog post we want", content: "..." }
        // even more blog posts
      ];

      posts = _.keyBy(posts, "id");

      var post = posts["34abc"]
      // post -> { id: "34abc", title: "The blog post we want", content: "..." }
    ```

7. _.reduce

    For this one I will cheat a little bit by presenting 2 functions that do almost the same thing. _.get will return a property value from an object and _.set will, well you guessed it, set a property with a value. Nothing special except that you can access a property with its path.

    ```js
      var users = [
        { name: "John", age: 30 },
        { name: "Jane", age: 28 },
        { name: "Bill", age: 65 },
        { name: "Emily", age: 17 },
        { name: "Jack", age: 30 }
      ]

      var reducedUsers = _.reduce(users, function (result, user) {
          if(user.age >= 18 && user.age <= 59) {
              (result[user.age] || (result[user.age] = [])).push(user);
          }
        
          return result;
      }, {});

      // reducedUsers -> { 
      //     28: [{ name: "Jane", age: 28 }], 
      //     30: [{ name: "John", age: 30 }, { name: "Jack", age: 30 }] 
      // }
    ```

8. _.cloneDeep

    _.cloneDeep will clone an object. The new object will also have a new address in memory so you won’t crush a property from the original object.

    ```js
      var original = { foo: "bar" };
      var copy = original;
      copy.foo = "new value";
      // copy -> { foo: "new value" } Yeah!
      // original -> { foo: "new value" } Oops!

      var original = { foo: "bar" };
      var copy = _.cloneDeep(original);
      copy.foo = "new value";
      // copy -> { foo: "new value" } Yeah!
      // original -> { foo: "bar" } Yeah!
    ```

9. _. sortedUniq

    With this one, all duplicated values won’t be returned. This is usually used for performance reasons, because it is specifically for the sorted arrays.

    ```js
      var sortedArray = [1, 1, 2, 3, 3, 3, 5, 8, 8];
      var result = _.sortedUniq(sortedArray);
      // -> [1, 2, 3, 5, 8]
    ```

10. _.get and ._set

    For this one I will cheat a little bit by presenting 2 functions that do almost the same thing. _.get will return a property value from an object and _.set will, well you guessed it, set a property with a value. Nothing special except that you can access a property with its path.

    ```js
      var bar = { foo: { key: "foo" } };
      _.set(bar, "foo.items[0]", "An item");
      // bar => { foo: { key: "foo", items: ["An item"] } }
      var name = _.get(bar, "name", "John Doe");
      // name => John Doe
    ```

11. _.get and ._set

    For this one I will cheat a little bit by presenting 2 functions that do almost the same thing. _.get will return a property value from an object and _.set will, well you guessed it, set a property with a value. Nothing special except that you can access a property with its path.

    ```js
      var bar = { foo: { key: "foo" } };
      _.set(bar, "foo.items[0]", "An item");
      // bar => { foo: { key: "foo", items: ["An item"] } }
      var name = _.get(bar, "name", "John Doe");
      // name => John Doe
    ```

### Comparison

- 

## Quiz 2

### Set up and run

_Below is how use can run my code in your computer._

1. Clone my respository by running the command below.

  ```sh
   git clone https://github.com/Weslife2002/backend-quiz3.git
   ```

2. Access the file and run the command below.

  ```sh
   Node algo.js
   ```

3. 1000 test cases for the problems are generated and the result is shown.

[back to top](#backend-quiz3)
