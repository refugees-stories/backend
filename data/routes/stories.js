const express = require('express');
const Stories = require('../models/stories.js');

const stories = express();
stories.use(express.json());

stories.get('/', (req, res) => {
  let { story } = req.body;
  const requestOptions = {
    headers: { accept: 'application/json' }
  };

  Stories
    .find({ story }, requestOptions)
    .then(rows => {
      res.status(200).json(rows)
    })
    .catch(err => {
      res.status(500).json({ message: `${err}` });
    });
});

stories.put('/update', async (req, res) => {
  const { id } = req.params;
  const { story } = req.body;

  try {
    const storyItem = await Stories.findById(id);
    if (storyItem) {
      await Stories.update(id, { story });
      res.status(200).json(storyItem);
    } else {
      res.status(404).json({ message: `There is no story by that ID.` });
    };
  } catch (err) {
    res.status(500).json({ message: `${err}` });
  };
});

stories.delete('/remove', async (req, res) => {
  try {
    const storyItem = await Stories.remove(req.params.id);
    if (storyItem) {
      res.status(200).json(storyItem);
    } else {
      res.status(404).json({ message: `There is no story by that ID.` });
    };
  } catch (err) {
    res.status(500).json({ message: `${err}` });
  };
});

module.exports = stories;