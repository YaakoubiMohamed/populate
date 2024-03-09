const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const bodyparser = require('body-parser');


const app = express();
app.use(bodyparser.json());

// base de donne
mongoose.connect("mongodb+srv://webya39oubiane:YXSs0f1wv66lX7vQ@cluster0.up4qdom.mongodb.net/event?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connection  a la BDD");
})
const evenementRoutes = require('./src/routes/eventRoutes')
const participantRoutes = require('./src/routes/participantsRoutes')
app.use('/api/event', evenementRoutes);
app.use('/api/participant',participantRoutes)


app.listen(4000, ()=>{
    console.log("server running on port 4000")
})