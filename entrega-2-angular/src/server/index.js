const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');

app.use(express.json());
app.use(cors());

// Definir una ruta para modificar un archivo JSON
app.post('/tasks', (req, res) => {
    const tasks = req.body;
    fs.writeFile('tasks.json', JSON.stringify(tasks), err => {
        if (err) {
            console.log("Error");
            res.status(500).send({msg:'Error al escribir el archivo'});
        } else {
            console.log("Insertado/Actualizado");
            res.status(200).send({msg:'Archivo modificado con éxito'});
        }
    });
});

app.get('/tasks', (req, res) => {
    fs.readFile('tasks.json', 'utf8', (err, data) => {
        if (err) {
            console.log("Error");
            res.status(500).send({msg:'Error al leer el archivo'});
        } else {
            const tasks = JSON.parse(data);
            res.json(tasks);
        }
    });
});

app.listen(3000, () => console.log('Servidor iniciado en el http://localhost:3000/'));