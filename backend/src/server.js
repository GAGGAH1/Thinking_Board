
const express = require('express');
const cors = require('cors');

const rateLimiter = require('./middleware/rateLimiter');
const notesRoute = require('./routes/notesRoute');
const connectDB = require('./config/db');


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;


app.use(cors({ origin: 'http://localhost:5173' })); // Enable CORS for all routes
// Middleware to parse JSON bodies
app.use(express.json());
app.use(rateLimiter); // Apply rate limiting middleware


// Middleware to log request details(simple custom middleware)
// app.use((req, res, next) => {
//   console.log(`Req Method: ${req.method}, Req URL: ${req.url}`);
//   next();
// });



app.use('/api/notes', notesRoute);
// app.use('/api/notes', getAllNotes);
// app.use('/api/notes', getNoteById);
// app.use('/api/notes', createNote);
// app.use('/api/notes', updateNote)
// app.use('/api/notes', deleteNote)

connectDB().then(() => {
  app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
  });
});




