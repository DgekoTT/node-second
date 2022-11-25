import express from 'express'
import mongoose from 'mongoose'

const PORT = 3000;

const app = express();

app.use(express.json());

const db_url = 'mongodb+srv://Dgeko:frGGT1@#4@cluster0.5rbuesr.mongodb.net/?retryWrites=true&w=majority'

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).json('Сервер в работе ');
});

app.listen(PORT, () => console.log('server started on PORT ' + PORT));
