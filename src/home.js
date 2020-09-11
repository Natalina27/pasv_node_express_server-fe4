export function home(req, res) {
  res.status(200).json({
    name: 'PASV',
    components: ['abx', 'tree'],
    q: true,
  });
}
