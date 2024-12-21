import { text } from "express";
import mongoose from "mongoose";

const messageShcema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        text: {
            type: String,
        },
        image: {
            type: String
        },
    }, { timestamps : true }
)