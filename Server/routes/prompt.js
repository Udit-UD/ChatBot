import express from "express";
import { sendMsgToOpenAI } from "../Controllers/prompt.js";


const router = express.Router();
router.post("/", sendMsgToOpenAI);
export default router;