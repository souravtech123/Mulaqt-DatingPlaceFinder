const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const port = 3000;

// Middleware to read JSON
app.use(express.json());
app.use(cors())

// Connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/datingplacedb')
  .then(() => console.log("Database connected"))
  .catch(err => console.log("DB Error:", err));


// Schema
const placeSchema = new mongoose.Schema({
  placeName: { type: String, required: true },
  vibe: { type: String, required: true },
  budget: { type: Number, required: true },
  timing: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String }
});

const Place = mongoose.model("Place", placeSchema);


// GET Route (FIXED async/await)
app.get('/', async (req, res) => {
  try {
    const allPlaces = await Place.find({});
    res.json(allPlaces);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Server start
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
