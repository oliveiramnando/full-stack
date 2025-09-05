const Note = require('../models/Note.js');

exports.getAllNotes = async (req,res) => {
    try {
        const result = await Note.find({});
        res.status(200).send({ success: true, message: "You just fetched all notes", result });
    } catch (error) {
        console.log(error);
    }
}

exports.createNote = async (req,res) => {
    const { title, content } = req.body;
    try {
        const result = await Note.create({
            title,
            content
        })
        return res.status(201).json({ success: true, message: "Note successfully created", result });
    } catch (error) {
        console.log(error);
    }
}

exports.updateNote = async (req,res) => {
    const { id } = req.params;
    // const { title, content } = req.body;
    try {
        const existingPost = await Note.findById(id);
        if (!existingPost) {
            return res.status(404).json({ success: false, message: "Note not found" })
        }
        const result = await Note.findByIdAndUpdate(id, req.body);
        return res.status(200).json({ message: "You just updated a note", result });
    } catch (error) {
        console.log(error);
    }
}

exports.deleteNote = async (req,res) => {
    const { id } = req.params;
    try {
        const existingPost = await Note.findById(id);
        if (!existingPost) {
            return res.status(404).json({ success: false, message: "Note not found" })
        }
        await Note.findByIdAndDelete(id);
        const result = await Note.find({});
        res.status(200).json({ success: true, message: "You just deleted a note", result });
    } catch (error) {
        console.log(error);
    }
}