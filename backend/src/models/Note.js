const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    // sharedWithUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    title: { type: String, required: true },
    content: { type: String, required: true },
    // tags: [{ type: String }],
    // color: { type: String },
    // priority: { type: String, enum: ['low', 'medium', 'high'] },
    // status: { type: String, enum: ['active', 'completed', 'archived'] },
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now },
    // reminder: { type: Date },
    // location: { type: String },
    // type: { type: String },
    // category: { type: String },
    // customFields: { type: Map, of: String }, // Custom fields as key-value pairs
    // isPinned: { type: Boolean, default: false },
    // isArchived: { type: Boolean, default: false },
    // isTrashed: { type: Boolean, default: false }
}, {timestamps: true});

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;