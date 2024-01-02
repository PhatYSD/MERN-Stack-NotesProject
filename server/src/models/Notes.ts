import { Schema, model } from "mongoose";

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Notes = model("Note", noteSchema);

export default Notes;