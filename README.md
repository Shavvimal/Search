Installation:
  Clone or download the repo.
  cd into the server directory.
  Run npm install to install the dependencies.
  (If this does not work, you may have to install the following dependencies: express, cors, and nodemon. Change the package.json main:"index.js" to "app.js" 
  and add the following to the script section : 
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },)
  Move onto usage.
  
Usage
  In the server directory, run nodemon app.js to start the server.
  Navigate to the client directory and open the index.html using http server or live server extension
  Two buttons have been created, they do seperate things, have a go!

Future features
  Implement functionality for the search bar (atm it does not do anything)
  Utilise the google search API to broaden search capabilities.
  
