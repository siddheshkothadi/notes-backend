# notes-backend
## Back end for notes web app.

### Follow the steps to get started:

<ul>
  <li><p>First, make sure you have node and nodemon installed!</p>
  <p>Check if node is installed by running the following command in your terminal:<p/>
  
  ```
  node -v
  ```
  <p>To install nodemon:</p>
  
  ```
  npm install -g nodemon
  ```
  
  </li>
  
  <li><p>Clone this repository by running the following command:</p>
  
  ```
  git clone https://github.com/siddheshkothadi/notes-backend
  ```
  
  ```
  cd notes-backend
  ```
  </li>
  
  <li>
    <p>Paste your Atlas uri inside .env file.</p>
    <p>Make sure you replace &ltpassword&gt with the password that you have created & &ltdbname&gt with the name of your database in MongoDB.</p>
    <p>Make two collections inside your database with following names:</p>
    <ul>
      <li>notes</li>
      <li>users</li>
    </ul>
    <p>Add some dummy data inside each of them so that it will be easier to test some initial GET requests.</p>
  </li>
  
  <li><p>Run the folowing command/s to install the dependencies:</p>
  
  ```
  npm install
  ```
  
  <p>OR</p>
  
  ```
  yarn
  ```
  
  </li>
  <li><p>Finally, run the server:</p>
  
  ```
  npm test
  ```
  
  <p>Open the following link on your browser to run the server(default port is 3000):</p>
  
  ```
  http://localhost:3000/
  ```
  
  </li>
  
  <li>Test GET,POST,PUT,DELETE requests usisng <a href="https://www.postman.com/">Postman.</a></li>
  </ul>
