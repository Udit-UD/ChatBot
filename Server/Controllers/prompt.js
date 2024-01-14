import User from "../models/user.js";
import Notes from "../models/Notes.js";

// CREATE

export const createNote = async (req, res) => {
    try{
        const {userId, title, content} = req.body;
        const user = await User.findById(userId);
        const newNote = new Notes({
            userId,
            firstName: user.firstName, 
            lastName: user.lastName, 
            title,
            content
        })
        await newNote.save();
        const Note = await Notes.find(); 
        res.status(200).json("Note Successfully Created");
    }
    catch(err){
        res.status(409).json({error: err.message});
    }
}

// READ
export const getParticularNote = async (req, res) => {
    try{    
        const {id} = req.params;
        const Note = await Notes.findById(id);
        res.status(200).json(Note);
    }
    catch(err){
        res.status(404).json({error: err.message});
    }
}

export const getPrompts = async(req, res) => {
    try{
        const { userId } = req.params;
        const Note = await Notes.find({ userId });
        res.status(200).json(Note);
    }
    catch(err){
        res.status(404).json({error: err.message});
    }
}
