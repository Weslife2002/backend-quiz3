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
    - [Array native](#array-native)
    - [LoDash](#lodash)
    - [Comparison](#comparison)
  - [Quiz 2](#quiz-2)
    - [Installation](#installation)

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

### Array native

### LoDash

When a user first access the website, he doesn't have a session ye.

### Comparison

In conclusion, we can use express-session without Redis, but like the documentation has warned :"The default server-side session storage, MemoryStore, is purposely not designed for a production environment. It will leak memory under mo

## Quiz 2

### Installation
_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Install Redis Client.
Run the command below.

  ```sh
   sudo apt install redis-tools
   ```

1. NPM express-session documentation:   <https://github.com/expressjs/session>

<p align="right">(<a href="#top">back to top</a>)</p>
