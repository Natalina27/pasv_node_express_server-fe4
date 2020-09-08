import express from 'express';

const app = express();

const PORT = 5000;

app.get('/', home);
app.get('/info', info);

function home(req, res) {
    res.send('PASV!');
}

function info(req, res) {
    const a = 123;
    const b = Math.random();
    const c = a + b;
    console.log(c);
    res.send('INFO here!');
}


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
