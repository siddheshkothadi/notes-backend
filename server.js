const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let uri = '';
process.env.NODE_ENV!=='test' ? uri = process.env.ATLAS_URI : uri = process.env.ATLAS_TEST_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const notesRouter = require('./routes/notes');
const usersRouter = require('./routes/users');

app.use('/notes', notesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    console.log(uri)
});

module.exports = app;