export function info(req, res) {
    const a = 123;
    const b = Math.random();
    const c = a + b;
    console.log(c);
    res.send('INFO here!' + c);
}
