const router = require('express').Router();
let Note = require('../models/note.model');

router.route('/').get((req,res) => {
  Note.find()
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const title = req.body.title;
  const description = req.body.description;

  const newNote = new Note({
    username,
    title,
    description
  });

  newNote.save()
  .then(() => res.json('Note added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


// Using this to fetch notes of a particular user with googleId
router.route('/:googleId').get((req, res) => {
  Note.find({googleId : req.params.googleId})
    .then(note => res.json(note))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Note.deleteOne({username:req.params.id})
    .then(() => res.json('Note deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').put((req, res) => {
  Note.findOne({username:req.params.id})
    .then(note => {
      note.username = req.body.username;
      note.title = req.body.title;
      note.description = req.body.description;

      note.save()
        .then(() => res.json('Note updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;