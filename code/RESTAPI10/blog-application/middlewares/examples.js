// example middleware function
let exampleMiddleware = (req, res, next) => {
    req.user = { 'firstName': 'Manu', 'lastName': 'Mohan'}
    next();
}

module.exports = {
    exampleMiddleware: exampleMiddleware
}