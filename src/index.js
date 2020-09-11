import express from 'express';
const app = express();
const PORT = 5000;

app.get('/', home);//GET localhost:5000
app.post('/info', info);//POST localhost:5000/info
app.use(apiNotFound);

function apiNotFound(req, res){
    res.status(400).json('API not found');
}

function home(req, res) {
    res.status(200).json({
        name: 'PASV',
        components: ['abx', 'tree'],
        q: true
    });
}

function info(req, res) {
    const a = 123;
    const b = Math.random();
    const c = a + b;
    console.log(c);
    res.send('INFO here!' + c);
}

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
