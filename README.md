# Notes - RESTful API using Express and Node
[![CI Actions Status](https://github.com/siddheshkothadi/notes-backend/workflows/Node.js%20CI/badge.svg)](https://github.com/siddheshkothadi/notes-backend/actions)

<a href='https://github.com/siddheshkothadi/'><img src='https://img.shields.io/github/followers/siddheshkothadi?label=Follow&style=social' alt='follow'/></a>
<a href='https://twitter.com/siddhesh_kt'><img src='https://img.shields.io/twitter/follow/siddhesh_kt?label=Follow%20siddhesh_kt&style=social' alt='follow'/></a>

## Introduction

### Back end for notes web app
<p>This repository contains code for the back end of the <a href='https://github.com/siddheshkothadi/notes-frontend'>notes web app.</a> It is a RESTful server built using Node.js runtime and Express framework, and can perform all the <b>CRUD</b> operations and other database queries on the MongoDB database. I've used MongoDB Atlas as a database and have defined the routes, models using Mongoose.
</p>

## Getting started

<p>These instructions will help you to set up the server on your local machine for development.</p>

### Prerequisites

<ol>
  <li><a href='https://nodejs.org/en/'>Node.js</a> - a JavaScript runtime</li>
  <li><a href='https://git-scm.com/downloads'>Git</a> - for cloning and version control</li>
  <li><a href='https://www.npmjs.com/package/nodemon'>Nodemon</a> - to automatically restart server when file changes in the directory are detected.</li>
</ol>

### Setting up the MongoDB Atlas cluster

<ul>
  <li>Follow <a href='https://docs.atlas.mongodb.com/getting-started/'>these</a> instructions to get started with MongoDB Atlas</li>
  <li>Click on the <b>COLLECTIONS</b> button of your cluster and create two databases inside it :
    <ol>
      <li><b>notes_app</b></li>
      <li><b>test</b></li>
    </ol>
  </li>
  <li>Inside each database, create two collections named : 
    <ol>
      <li><b>notes</b></li>
      <li><b>users</b></li>
    </ol>
  </li>
  <li>The final structure of your cluster should look something like this : 
  
  ```
    Cluster0            // Your main cluster
      |_ notes_app      // Database #1 - Main Database
      |    |_ notes     // (Collection) - All the user notes are saved here
      |    |_ users     // (Collection) - User information is saved here
      |_ test           // Database #2 - For testing
           |_ notes     // (Collection) - Test notes
           |_ users     // (Collection) - Test users
  ```
  
  </li>
</ul>

### Installing

<ul>
  <li><p>Clone this repository using the following command inside the terminal/cmd</p>
  
  ```
  git clone https://github.com/siddheshkothadi/notes-backend
  ```
  ```
  cd notes-backend
  ```
  
  </li>
  
  <li>
  <h3>Setting up the </h3>
<!--     <p>Paste ATLAS_URI, ATLAS_TEST_URI, CLIENT_ID, CLIENT_SECRET, COOKIE_KEY inside .env file.</p> -->
  </li>
  
  <li><p>Run the folowing command to install the dependencies</p>
  
  ```
  npm install
  ```
  
  <p>OR</p>
  
  ```
  yarn
  ```
  
  </li>
  <li><p>Finally, run the server </p>
  
  ```
  npm run dev
  ```
  <p>Your server should now be running on PORT 5000</p>
  </li>
  
  <li>Test GET, POST, PUT, DELETE requests using <a href="https://www.postman.com/">Postman.</a></li>
  </ul>
