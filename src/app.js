const express = require('express');

const app = express();
app.use(express.json());

app.get('/saludo', (req, res) => {
    res.send('Hola estudiantes');
});

app.get('/prueba', (req, res) => {
     res.json([]);
});

app.post('/prueba', (req, res) => {
    const {nombre, apellido}=req.body;
    res.json({
        nombre,
        apellido,
        id: "1"
    });
});

module.exports = {app} ;