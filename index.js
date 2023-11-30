import {Name} from "./schemas/name.js";

import express from "express";

import mongoose from "mongoose";

import cors from "cors";

const app = express();

const uri = 'mongodb://root:testing@despliegue-mongo:27017/names?authSource=admin';
await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use(cors())
app.use(express.json());

app.get('/names', async (req, res) => {
    const names = await Name.find().select('name').exec();
    const namesArray = names.map(name => name.name);
    res.send(namesArray);
})

app.post('/names', async (req, res) => {
    const name = new Name({name: req.body.name});
    await name.save();
    res.send(name);
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})