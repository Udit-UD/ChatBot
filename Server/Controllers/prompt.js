// import User from "../models/user.js";
// import Notes from "../models/Notes.js";

// // CREATE

// export const createNote = async (req, res) => {
//     try{
//         const {userId, title, content} = req.body;
//         const user = await User.findById(userId);
//         const newNote = new Notes({
//             userId,
//             firstName: user.firstName, 
//             lastName: user.lastName, 
//             title,
//             content
//         })
//         await newNote.save();
//         const Note = await Notes.find(); 
//         res.status(200).json("Note Successfully Created");
//     }
//     catch(err){
//         res.status(409).json({error: err.message});
//     }
// }

// // READ
// export const getParticularNote = async (req, res) => {
//     try{    
//         const {id} = req.params;
//         const Note = await Notes.findById(id);
//         res.status(200).json(Note);
//     }
//     catch(err){
//         res.status(404).json({error: err.message});
//     }
// }

// export const getPrompts = async(req, res) => {
//     try{
//         const { userId } = req.params;
//         const Note = await Notes.find({ userId });
//         res.status(200).json(Note);
//     }
//     catch(err){
//         res.status(404).json({error: err.message});
//     }
// }

import OpenAI from "openai";


export const sendMsgToOpenAI = async(req, res) => {
  try{
    const openai = new OpenAI({
        apiKey: process.env.API_KEY,
    });
    const prompt = req.body.message;
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
      temperature: 0.7
    });
    const finalRes = completion.choices[0];
    return res.status(200).json({finalRes});
  }
  catch(e){
    res.status(404).json({error: e.message});
  }
}

