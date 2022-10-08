const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD +'@cluster0.s4weeo4.mongodb.net/groupomania',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

module.exports.getDB = () => {
    return db
}