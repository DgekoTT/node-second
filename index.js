import express from 'express'

const PORT = 3000;

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).json('Сервер в работе ');
});

app.listen(PORT, () => console.log('server started on PORT ' + PORT));
