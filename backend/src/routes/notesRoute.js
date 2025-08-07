const express = require('express');
const router = express.Router();
const { getAllNotes, getNoteById, createNote, updateNote, deleteNote } = require('../controllers/notesController');
// const { authenticate } = require('../middleware/authMiddleware');

// Route to create a new note
router.post('/create', createNote);
// Route to get all notes
router.get('/all', getAllNotes);
// Route to get a note by ID
router.get('/:id', getNoteById);
// Route to update an existing note
router.put('/update/:id', updateNote);
// Route to delete a note
router.delete('/delete/:id', deleteNote);
// Route to get notes by user ID
// router.get('/user/:userId', getNotesByUserId);
// Route to get notes by title
// router.get('/search/:title', getNotesByTitle);
// Route to get notes by tag
// router.get('/tag/:tag', getNotesByTag);
// Route to get notes by date
// router.get('/date/:date', getNotesByDate);
// Route to get notes by content
// router.get('/content/:content', getNotesByContent);
// Route to get notes by priority
// router.get('/priority/:priority', getNotesByPriority);
// Route to get notes by status
// router.get('/status/:status', getNotesByStatus);

// Route to get notes by color
// router.get('/color/:color', getNotesByColor);
// Route to get notes by reminder
// router.get('/reminder/:reminder', getNotesByReminder);
// Route to get notes by location
// router.get('/location/:location', getNotesByLocation);
// Route to get notes by type
// router.get('/type/:type', getNotesByType);
// Route to get notes by category
// router.get('/category/:category', getNotesByCategory);
// Route to get notes by custom field
// router.get('/custom/:field', getNotesByCustomField);
// Route to get notes by shared status
// router.get('/shared/:shared', notesController.getNotesBySharedStatus);
// Route to get notes by archived status
// router.get('/archived/:archived', getNotesByArchivedStatus);
// Route to get notes by trashed status
// router.get('/trashed/:trashed', notesController.getNotesByTrashedStatus);
// Route to get notes by pinned status
// router.get('/pinned/:pinned', notesController.getNotesByPinnedStatus);

module.exports = router;