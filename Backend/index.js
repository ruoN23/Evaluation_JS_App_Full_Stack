const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello hehe');
});


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});