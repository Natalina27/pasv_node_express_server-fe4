function apiNotFound(req, res){
    res.status(400).json('API not found');
}

export function errorHandler(app){
    app.use(apiNotFound);
}
