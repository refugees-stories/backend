const Stories = require('../models/stories.js');

module.exports = server => {
  server.post('/api/stories/submit', submit);
  server.put('/api/stories/:id', edit);
  server.delete('/api/stories/:id', removal);
};

async function submit(req, res) {
  const { story } = req.body;

  try {
    const newStory = await Stories.add(req.body);
    if (story) {
      res.status(200).json(newStory);
    } else {
      res.status(400).json({ message: `Please provide a story to submit it.` });
    };
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: `${err}` });
  };
};

async function edit(req, res) {
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
};

async function removal(req, res) {
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
};