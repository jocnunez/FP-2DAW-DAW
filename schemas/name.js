import mongoose from "mongoose";

const nameSchema = new mongoose.Schema({
    name: String
})

export const Name = mongoose.model('Name', nameSchema);
