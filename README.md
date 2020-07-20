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

<ul>
  
  <li><p>Clone this repository</p>
  
  ```
  git clone https://github.com/siddheshkothadi/notes-backend
  ```
  ```
  cd notes-backend
  ```
  
  </li>
  
  <li>
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
  <li><p>Finally, run the server:</p>
  
  ```
  npm run dev
  ```
  
  <p>Open the following link on your browser to run the server(default port is 5000):</p>
  
  ```
  http://localhost:5000/
  ```
  
  </li>
  
  <li>Test GET, POST, PUT, DELETE requests using <a href="https://www.postman.com/">Postman.</a></li>
  </ul>
