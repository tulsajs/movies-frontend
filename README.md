# TulsaJS Redux Workshop

### Dev Installation

#### Requirements

In order to successfully run this project from your local machine, you'll need the following software installed:

* [Git](https://git-scm.com/)
* [Node - v5.x](https://nodejs.org/en/download/)
* npm (this should come packaged with Node)

#### Install steps

1. Clone repo

  ```
  git clone https://github.com/tulsajs/redux-workshop.git
  ```

2. Install npm dependencies

  ```
  npm install
  ```

3. Signup for an account with themoviedb @ `https://www.themoviedb.org/account/signup?language=en`
  ![step1](http://image.prntscr.com/image/b66b037a491346bcabf910782587157a.png "Account Settings")

  ![step2](http://image.prntscr.com/image/aea48871666d45f790deb1e04605a83c.png "Account Settings")

4. Once signed up go to your account -> API and copy your API Key(v3 auth)

5. Rename `.env-example.js` to `.env.js` and add your api key within the JSON object.

6. Run the local server

  Build the project and start a local dev server with this command:

  ```
  npm run server
  ```

7. You should at this point be able to enter in a movie name and search for it.

  And then head over to [localhost:8080](http://localhost:8080/) to see the project live.

8. Once you have the project working you can checkout the `starter` branch using `git checkout starter`
