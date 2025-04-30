const pool = require('../config/db');

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Erreur de connexion à la base:', err.message);

    } else {
        console.log('Connexion à la base réussie!');
    }
    pool.end();
});