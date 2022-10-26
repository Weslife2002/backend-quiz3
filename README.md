# backend-quiz3

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#overview">Quiz requirement</a>
      <ul>
        <li><a href="#quiz1-requirement">Quiz 1 Requirement</a></li>
        <li><a href="#quiz2-requirement">Quiz 2 Requirement</a></li>
      </ul>
    </li>
    <li>
      <a href="#quiz1">Quiz 1 Answer</a>
      <ul>
        <li><a href="#JS-native">JS Native</a></li>
        <li><a href="#Array-native">Array Native</a></li>
        <li><a href="#LoDash">LoDash</a></li>
        <li><a href="#Comparison">Comparison between JS Native, Array Native and LoDash</a></li>
      </ul>
    </li>
    <li>
      <a href="#quiz2">Quiz 2</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#conclusion">Conclusion</a></li>
        <li><a href="#Reference">Reference</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- overview -->
## Quiz requirement

The below section lists the detail requirement of the quiz.

### Quiz 1 requirement

In the first task, I am required to list all object and arrays manipulation functions available in Array-native, JavaScript-native and LoDash.
My answer is written on the section [Quiz 1 Answer]("#quiz1")
### Quiz 2 requirement

In the seond task, I am required to write two files - Scale.js and main.js in which:

* Scale.js implements the class Scale that has 3 methods

* ExpressJS
* WSL2 for Windows
* docker
* PostgreSQL

[back to top]("#top")

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.

### Prerequisites

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Install Redis Client.
Run the command below.

  ```sh
   sudo apt install redis-tools
   ```

2. Install Redis Server.
Run the command below.

  ```sh
   sudo apt install redis-server
   ```

3. Run Redis Server.
Run the command below.

  ```sh
   redis-server
   ```

4. Open a new cmd and check for redis connection.
Run the command below.

  ```sh
   redis-cli
   ```

5. Clone the repo

   ```sh
   git clone https://github.com/Weslife2002/NodeJS-ExpressSession-Redis.git
   ```

6. Create a copy of the .env.example file, change its name to .env and redefine the config.
_For example above, I will configurate the .env file like this:_

   ```sh
    PORT= 3000
   ```

7. Install all the dependency.

   ```sh
   npm install
   ```

8. Run the project

   ```sh
    npm start
   ```

_NOTE: YOU CAN ADJUST THE CODE TO RUN THE TEST WITHOUT REDIS AND SEE WHAT HAPPENED WHEN YOU RESTART THE SEVER_

### About data flow

When a user first access the website, he doesn't have a session yet, so he will sent a request to the server to assign him a session. The server will query for userdata to the database and save the received infor as a session, the session is created and saved inside MemotyStore or temporary file or database or cache like redis (server). The server afterthat will send back a sessionID and from that point onward, the client will sent the request with sessionID attached in the header.
<p align="right">(<a href="#top">back to top</a>)</p>

### Conclusion

In conclusion, we can use express-session without Redis, but like the documentation has warned :"The default server-side session storage, MemoryStore, is purposely not designed for a production environment. It will leak memory under most conditions, does not scale past a single process, and is meant for debugging and developing.", besides, if some processes go wrong and we has to restart the server then all the current users' session will terminate. Therefore, we need to store the session inside redis.
<p align="right">(<a href="#top">back to top</a>)</p>

### Reference

1. NPM express-session documentation:   <https://github.com/expressjs/session>

<p align="right">(<a href="#top">back to top</a>)</p>
