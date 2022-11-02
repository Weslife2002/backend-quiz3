# backend-quiz3

<!-- TABLE OF CONTENTS -->
## Table of Contents

- [backend-quiz3](#backend-quiz3)
  - [Table of Contents](#table-of-contents)
  - [Quiz requirement](#quiz-requirement)
    - [Quiz 1 requirement](#quiz-1-requirement)
    - [Quiz 2 requirement](#quiz-2-requirement)
  - [Quiz 1 Answer](#quiz-1-answer)
    - [Array](#array)
      - [JS-native Array](#js-native-array)
      - [LoDash Array](#lodash-array)
      - [Comparison JS-native Array vs LoDash Array](#comparison-js-native-array-vs-lodash-array)
    - [Object](#object)
      - [JS-Native Object](#js-native-object)
      - [LoDash Object](#lodash-object)
      - [JS-Native Object vs LoDash Object](#js-native-object-vs-lodash-object)
  - [Quiz 2](#quiz-2)
    - [Set up and run](#set-up-and-run)

<!-- overview -->
## Quiz requirement

### Quiz 1 requirement

In the first task, I am required to list all object and arrays manipulation functions available in Array-native, JavaScript-native and LoDash.
My answer is written on the section [Quiz 1 Answer](#quiz-1-answer)

### Quiz 2 requirement

In the seond task, I am required to write three files - **${\color{orange}Scale.js}$**, **${\color{orange}algo.js}$** and **${\color{orange}algo2.js}$** (or **${\color{orange}algo3.js}$**)  in which:

- **${\color{orange}Scale.js}$** implements the class Scale that has 3 methods:
  - **${\color{lightblue}constructor()}$**: Initialize the class with an array include the weight of 12 coins, in which one is heavier or lighter than another.

  - **${\color{lightblue}weigh(left, right)}$**: Take in two array contains coins' index and return 1 if the left is hevier than the right, 2 if the left is equals to the right and 3 for the last case.

  - **${\color{lightblue}checkResult(faultIndex, heavier)}$**: Take in the index of the fault coin and true if the fault coin is heavier, false if the fault coin is lighter. However, if the user use the function checkResult more than one time, the function will always return false.

- **${\color{orange}algo.js}$** implements the function findFaultCoint that applys the optimized algorithm for solving the problem without accessing the private data of the Scale class.
- **${\color{orange}algo2.js}$** is similar to file **${\color{orange}algo.js}$** but I can weigh four times.
- **${\color{orange}algo3.js}$** is also weigh four times but the source code is the easiest to understand.

[back to top](#backend-quiz3)

<!-- GETTING STARTED -->
## Quiz 1 Answer

### Array

#### JS-native Array

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
      const arr = [1, 2, 3, 4, 5, 6];
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

22. **reduceRight()**

    The reduceRight() method executes the callback function once for each element present in the array, receiving four arguments: the initial value (or value from the previous callback call), the current element's value, the current index, and the array over which iteration is occurring.

    ```js
      const sum = [0, 1, 2, 3, 4].reduceRight(function(a, b) {
        return a + b;
      }); // sum = 10;
    ```

23. **reverse()**

    The reverse() method reverse all elements of an array.

    ```js
      const arr = [5, 12, 8, 130, 200];
      arr.reverse(); // arr: [200, 130, 8, 12, 5]
    ```

24. **length**

    Return the length of the array.

    ```js
      const arr = [5, 12, 8, 130, 200];
      arr.length; // output: 5
    ```

25. **spread syntax (...)**

    The spread syntax will make a shallow copy of each element from the original array.

    ```js
      const array = [5, 12, 8, 130, 200];
      const newArr = [1, 2, 3, 4, ...array]; // newArr = [1, 2, 3, 4, 5, 12, 8, 130, 200]
    ```

[back to top](#backend-quiz3)

#### LoDash Array

1. \_.compact

    Remove all false, null, 0, "", undefined values and NaN from the original array.

    ```js
      const arr = [1, '', 2];
      console.log(_.compact(arr)); // output: [1, 2] 
      // arr : [1, '', 2]
    ```

2. \_.without

    Remove all false, null, 0, "", undefined values and NaN from the original array.

    ```js
      const arr = [1, '', 2];
      console.log(_.compact(arr)); // output: [1, 2] 
      // arr : [1, '', 2]
    ```

3. \_.nth

    Remove all false, null, 0, "", undefined values and NaN from the original array.

    ```js
      const arr = [1, '', 2];
      console.log(_.compact(arr)); // output: [1, 2] 
      // arr : [1, '', 2]
    ```

4. \_.findIndex, \_.findLastIndex, \_.lastIndexOf

    Remove all false, null, 0, "", undefined values and NaN from the original array.

    ```js
      const arr = [1, '', 2];
      console.log(_.compact(arr)); // output: [1, 2] 
      // arr : [1, '', 2]
    ```

5. \_.pull, \_.pullAll, \_.pullAllBy, \_.pullAllWith, \_.pullAt

    This method returns an object composed from key-value pairs.

    ```js
      _.fromPairs([['a', 1], ['b', 2]]);
      // { 'a': 1, 'b': 2 }
    ```

6. \_.drop, \_.dropRight, \_.dropWhile, \_.dropRightWhile, \_.remove

    Remove .

    ```js
      const arr = [1, '', 2];
      console.log(_.compact(arr)); // output: [1, 2] 
      // arr : [1, '', 2]
    ```

7. \_.head, \_.tail, \_.initial, \_.last

    Remove .

    ```js
      const arr = [1, '', 2];
      console.log(_.compact(arr)); // output: [1, 2] 
      // arr : [1, '', 2]
    ```

8. \_.flatten, \_.flattenDeep, \_.flattenDepth

    Remove .

    ```js
      const arr = [1, '', 2];
      console.log(_.compact(arr)); // output: [1, 2] 
      // arr : [1, '', 2]
    ```

9. \_.fromPairs.

    This method returns an object composed from key-value pairs.

    ```js
      _.fromPairs([['a', 1], ['b', 2]]);
      // { 'a': 1, 'b': 2 }
    ```

10. \_.intersection, \_.intersectionBy, \_.intersectionWith, \_.join.

    This method returns an object composed from key-value pairs.

    ```js
      _.fromPairs([['a', 1], ['b', 2]]);
      // { 'a': 1, 'b': 2 }
    ```

11. \_.xor, \_.xorBy, \_.xorWith, \_.difference, \_.differenceBy, differenceWith.

    This method returns an object composed from key-value pairs.

    ```js
      _.fromPairs([['a', 1], ['b', 2]]);
      // { 'a': 1, 'b': 2 }
    ```

12. \_.union, \_.unionBy, \_.unionWith, join, xor, xorBy, xorWith.

    This method returns an object composed from key-value pairs.

    ```js
      _.fromPairs([['a', 1], ['b', 2]]);
      // { 'a': 1, 'b': 2 }
    ```

13. \_.zip, \_.zipObject, \_.zipObjectDeep, \_.zipWith, \_. unzip, \_.unzipWith.

    This method returns an object composed from key-value pairs.

    ```js
      _.fromPairs([['a', 1], ['b', 2]]);
      // { 'a': 1, 'b': 2 }
    ```

14. \_.sortedIndex, \_.sortedIndexBy, \_.sortedIndexOf, \_.sortedLastIndex,
\_.sortedLastIndexBy, \_.sortedLastIndexOf, \_.sortedUniq, \_.sortedUniqBy

    This method returns an object composed from key-value pairs.

    ```js
      _.fromPairs([['a', 1], ['b', 2]]);
      // { 'a': 1, 'b': 2 }
    ```

[back to top](#backend-quiz3)

#### Comparison JS-native Array vs LoDash Array

[back to top](#backend-quiz3)

### Object

#### JS-Native Object

1. Object.assign()

    The method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

    ```js
      const target = { a: 1, b: 2 };
      const source = { b: 4, c: 5 };
      
      Object.assign(target, source);
      // {a: 1, b: 4, c: 5};

    ```

2. Object.create()

    The Object.create() method creates a new object, using an existing object as the prototype of the newly created object. The element are shallow copied.

    ```js
      const person = {
        isHuman: false,
        printIntroduction: function() {
          console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
        }
      };

      const me = Object.create(person);

      me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
      me.isHuman = true; // inherited properties can be overwritten

      me.printIntroduction();
      // expected output: "My name is Matthew. Am I human? true"
    ```

3. Object.entries()

    The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

    ```js
      const object1 = {
        a: 'somestring',
        b: 42
      };

      for (const [key, value] of Object.entries(object1)) {
        console.log(`${key}: ${value}`);
      }

      // output:
      // "a: somestring"
      // "b: 42"  
    ```

4. Object.getOwnPropertyNames()

    The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

    ```js
      const object1 = {
        a: 'somestring',
        b: 42
      };

      for (const [key, value] of Object.entries(object1)) {
        console.log(`${key}: ${value}`);
      }
      
      // output:
      // "a: somestring"
      // "b: 42"  
    ```
5. Object.entries()

    The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

    ```js
      const object1 = {
        a: 'somestring',
        b: 42
      };

      for (const [key, value] of Object.entries(object1)) {
        console.log(`${key}: ${value}`);
      }
      
      // output:
      // "a: somestring"
      // "b: 42"  
    ```

6. Object.entries()

    The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

    ```js
      const object1 = {
        a: 'somestring',
        b: 42
      };

      for (const [key, value] of Object.entries(object1)) {
        console.log(`${key}: ${value}`);
      }
      
      // output:
      // "a: somestring"
      // "b: 42"  
    ```

7. Object.entries()

    The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

    ```js
      const object1 = {
        a: 'somestring',
        b: 42
      };

      for (const [key, value] of Object.entries(object1)) {
        console.log(`${key}: ${value}`);
      }
      
      // output:
      // "a: somestring"
      // "b: 42"  
    ```

#### LoDash Object

1. \_.assign and \_.extend

    Assigns own enumerable string keyed properties of source objects to the destination object. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.

    ```js
      const object = [{ b: [{ a: '5' }, 6, 100, 89] }, { e: 4 }];
      const other = [{ c: { b: [1, 2, 3] } }, { e: 5 }, { f: 100 }];
      _.assign(object, other);  // [{ c: { b: [1, 2, 3] } }, { e: 5 }, { f: 100 }]
      object[0] === other[0];   // true
      _.extend(object, other);  // [{ c: { b: [1, 2, 3] } }, { e: 5 }, { f: 100 }]
      object[0] === other[0];   // true
    ```

2. _.merge

    This method is like _.assign except that it recursively merges own and inherited enumerable string keyed properties of source objects into the destination object. Source properties that resolve to undefined are skipped if a destination value exists. Array and plain object properties are merged recursively. Other objects and value types are overridden by assignment. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.

    ```js
      let object = {
        a: [{ c: [{ a: '5' }, 6, 100, 89] }, { e: 4 }],
      };

      let other = {
        a: [{ c: [1, 2, 3] }, { e: 5 }, { f: 100 }],
      };
      _.merge(object, other);   // { a: [{ c: [1, 2, 3, 89] }, { e: 5 }, { f: 100 }] }
      _.assign(object, other);  // { a: [{ c: [1, 2, 3] }, { e: 5 }, { f: 100 }] }
    ```

3. _.concat

    This method is used to merge arrays with other arrays or add variable or even create new array from variable.

    ```js
      let array1 = [1, 5, 3, 1];
      let array2 = [7, 25, 21];
      let array3 = [11, 3, 3, 2];
      let mergedArray = _.concat(array1, array2, array3); // mergedArray: [1, 5, 3, 1, 7, 25, 21, 11, 3, 3, 2]
      const newProduct = _.concat(1, ['category', 'discount']); // newProduct: [1, 'category', 'discount']
    ```

4. _.times

    _.times receives as arguments the number of iterations and a function to execute n times and returns an array of the results. Very useful when creating dynamic test data.

    ```js
      _.times(3, String);
      // => ['0', '1', '2']

      var result = _.times(5, Math.round(Math.random() * 100));
      // result => [64, 70, 29, 10, 23]
    ```

5. _.find

    Instead iterating through an array with a loop to find a specific object, we can simply use _.find. You can also find an object using multiple properties.

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

6. _.get

    Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.

    ```js
      var bar = { foo: { key: "foo" } };
      var name = _.get(bar, "name", "John Doe");
      // name => John Doe
    ```

7. _.set

    Sets the value at path of object. If a portion of path doesn't exist, it's created. Arrays are created for missing index properties while objects are created for all other missing properties.

    ```js
      var bar = { foo: { key: "foo" } };
      _.set(bar, "foo.items[0]", "An item");
      // bar => { foo: { key: "foo", items: ["An item"] } }
    ```

8. _.clone

    Creates a shallow clone of value.
    _Note: An empty object is returned for uncloneable values such as error objects, functions, DOM nodes, and WeakMaps._

9. _.cloneDeep

    _.cloneDeep will clone an object. The new object will also have a new address in memory so you won’t crush a property from the original object.

    ```js
      let original = { foo: [1, 2, 3] };
      let shallowCopy = _.clone(original);
      let deepCopy = _.cloneDeep(original);
      original.foo[1] = 100;
      // shallowCopy -> { foo: [1, 100, 3] } Yeah!
      // deepCopy -> { foo: [1, 2, 3] } Yeah!
    ```

10. _.sortedUniq and \_.uniq

    With \_.sortedUniq, similar to \_.uniq when all duplicated values won’t be returned. However \_.sortedUniq is usually used for performance reasons, because it is specifically for the sorted arrays.

    ```js
      var sortedArray = [1, 1, 2, 3, 3, 3, 5, 8, 8];
      var result = _.sortedUniq(sortedArray);
      // -> [1, 2, 3, 5, 8]
    ```

11. _.filter

    Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).

    ```js
      const users = [
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred',   'age': 40, 'active': false }
      ];
      
      _.filter(users, function(o) { return !o.active; });
      // output: [{ 'user': 'fred',   'age': 40, 'active': false }]
    ```

12. _.isEqual

    Performs a deep comparison between two values to determine if they are equivalent.

    ```js
      const book1 = {
        name: ‘JavaScript: The Good Parts’,
        price: 13.5
      };
      const book2 = {
        name: ‘JavaScript: The Good Parts’,
        price: 13.5
      };
      _.isEqual(book1, book2); // true
      book1 === book2 // false
    ```

    _Note: Two objects are never the same even if they have the same content, as two different instances of Object is never equal._
    _When comparing two object, JavaScript compares internal references which are equal only when both operands refer to the same object in memory, keys and values are not checked, so the content of the object doesn't matter, the operands both have to reference the same object to return true in a comparison._

13. _.pick

    _.pick function is useful when you want to form a new object based on the properties of the existing object.

    ```js
      let product = {
        name: ‘Learning React Native’,
        category: ‘Book’,
        price: 15,
        discount: 0.3
      };
      let newProduct = _.pick(product, [‘name’, ‘price’]);
      // newProduct: { name: ‘Learning React Native, price: 15 }
    ```

14. _.omit

    _.omit can be used to create a new project that doesn't have some properties of the existing object.
    _Note: the new obj is a shallow copy of the existing one only._

    ```js
      let product = {
        name: ‘Learning React Native’,
        category: ‘Book’,
        price: 15,
        discount: 0.3
      };
      let newProduct = _.omit(product, [category, discount]);
      // newProduct: { name: ‘Learning React Native, price: 15 }
    ```

15. _.isEmpty

    This function checks if an object, a map, a collection, or a set is empty.

    ```js
      let book1 = {};
      console.log(_.isEmpty(book1)); // true;
      let book2 = { name: ‘Learning JavaScript };
      console.log(_.isEmpty(book2)); // false;
    ```

16. _.union

    This function create a new array from the element’s the unique values.

    ```js
      let unitedArray = _.union([1, 5 , 3 , 11, 2], [3, 7, 11], [25, 21, 2]);  
      // unitedArray: [1, 5, 3, 7, 25, 21, 11, 2]
    ```

17. _.difference

    The difference function will produce a new array of values that is in the first array but not in the second arrays.

    ```js
      _.difference([2, 1], [2, 3]); // => [1]
    ```

18. _.intersection

    Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

    ```js
      _.intersection([2, 1], [2, 3]); // => [2]
    ```

19. _.orderBy

    The orderBy method is similar to sortBy but it allows us to specify the descending or ascending sort order. For descending sort, we specify desc and for ascending we specify asc.

    ```js
      const users = [
        { 'user': 'fred',   'age': 48 },
        { 'user': 'barney', 'age': 36 },
        { 'user': 'fred',   'age': 40 },
        { 'user': 'barney', 'age': 34 }
      ];
      // sort by user in ascending order and age by descending order
      console.log(_.orderBy(users, ['user', 'age'], ['asc', 'desc']));
      // [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
    ```

20. _.keyBy

    Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the last element responsible for generating the key. The iteratee is invoked with one argument: (value).

    ```js
      var posts = [
        { id: "1abc", title: "First blog post", content: "..." },
        { id: "2abc", title: "Second blog post", content: "..." },
        { id: "3abc", title: "The blog post we want", content: "..." }
      ];
      posts = _.keyBy(posts, "id");
      // posts: { 
      //  "1abc": { id: "1abc", title: "The blog post we want", content: "..." },
      //  "2abc": { id: "2abc", title: "Second blog post", content: "..." },
      //  "3abc": { id: "3abc", title: "The blog post we want", content: "..." },
      // };
    ```

#### JS-Native Object vs LoDash Object

1. **_.filter vs filter(), _.find vs find()**

    In native-JS, filter() only accepts the second parameter as function while \_.filter accepts JSON object type. It is also similar for \_.find and find() in native-JS.

    ```js
      const users = [
        { user: 'barney', age: 36, active: true },
        { user: 'fred', age: 40, active: false },
      ];

      console.log(_.filter(users, { age: 36, active: true }));  // [{ user: 'barney', age: 36, active: true }]
      console.log(_.find(users, { age: 36, active: true }));    //  { user: 'barney', age: 36, active: true }
      console.log(users.filter({ age: 36, active: true }));   // TypeError: #<Object> is not a function
      console.log(users.find({ age: 36, active: true }));     // TypeError: #<Object> is not a function
    ```

2. **..., slice() vs _.clone, _.deepClone**

    ..., slice(), \_.clone shallows copy the iterable elements in the object. \_deepClone recursively deep copies all the elements in the object.

    ```js
      const users = [
        { user: 'barney', age: 36, active: true },
        { user: 'fred', age: 40, active: false },
      ];

      console.log(_.filter(users, { age: 36, active: true })); // [ { user: 'barney', age: 36, active: true } ]
      console.log(users.filter({ age: 36, active: true })); // TypeError: #<Object> is not a function
    ```

3. **..., concat() vs _.concat, _.union**

    All of them all create a shallow copy for the elements and only work with iterable elements.

    ```js
      const arr = [1, 2, 3];
      arr.abc = "This is not iterable!"; // arr: [1, 2, 3, abc: 'This is not iterable!']
      let newArr = [1, ...arr];     // newArr: arr: [1, 1, 2, 3]
      newArr = [1].concat(arr);     // newArr: arr: [1, 1, 2, 3]
      newArr = [1].concat(1, 2, 3); // newArr: arr: [1, 1, 2, 3]
      newArr = _.concat([1], arr);  // newArr: arr: [1, 1, 2, 3]
      newArr = _.union([1], arr);   // newArr: arr: [1, 2, 3]
    ```

4. **_.assign _.merge, _.extend**

    The \_.assign() and \_.extend are similar to each other while \_.merge does those steps recursively.

    ```js
      const object = { b: [{ a: '5' }, 6, 100, 89], e: 4 };
      const other = { b: { b: [1, 2, 3] }, e: 5, f: 100 };

      _.merge(object, other);   // { b: [ { a: '5' }, 6, 100, 89, b: [ 1, 2, 3 ] ], e: 5, f: 100 }
      _.assign(object, other);  // { b: { b: [ 1, 2, 3 ] }, e: 5, f: 100 }
      _.extend(object, other);  // { b: { b: [ 1, 2, 3 ] }, e: 5, f: 100 }
    ```

5. **_.reduce vs reduce(), _.map vs map(), _.reduceRight vs reduceRight(), _.concat vs concat()**

    Those functions in LoDash and JS-native are the same, so if it's unnecessary to download LoDash for those functions only.

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

3. Or you want to run the simplified version, run the command below.

    ```sh
    Node algo2.js
    ```

4. 1000 test cases for the problems are generated and the result is shown.

[back to top](#backend-quiz3)
