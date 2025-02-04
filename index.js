// REQUERIMOS EXPRESS
const express = require ('express');

// USAMOS EXPRESS
const app = express()

// DEFINIMOS PUERTO
const PORT = 3000

//DEFINIMOS RUTAS
app.get('/', (req, res) => {
    res.send (`
        <h1>Esta es la pagina principal</h1>
        <ul>
            <li>Marketing</li>
            <li>Delovepers</li>
            <li>Ventas</li>
            <li>OAs</li>
        </ul>
    `)
})

// ESCUCHAMOS AL SERVIDOR
app.listen(3000, () => {
    console.log('Express esta escuchando en el puerto http://localhost:$(PORT)');
})




