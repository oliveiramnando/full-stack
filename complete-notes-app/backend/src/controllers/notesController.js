
exports.getAllNotes = async (req,res) => {
    res.status(200).send("You just fetched all notes");
}

exports.createNote = async (req,res) => {
    res.status(201).json({ message: "You just created a note" });
}

exports.updateNote = async (req,res) => {
    res.status(200).json({ message: "You just updated a note" });
}

exports.deleteNote = async (req,res) => {
    res.status(200).json({ message: "You just deleted a note" });
}