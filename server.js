const http = require('http');
const data = require('./data'); 

const server = http.createServer((req, res) => {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const htmlContent = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.title}</title>
        </head>
        <body>
            <header>
                <h1>${data.subtitle}</h1>
            </header>
            <main>
                <p>${data.description}</p>
            </main>
            <footer>
                <p>Autor: ${data.author}</p>
                <p>Año: ${data.year}</p>
            </footer>
        </body>
        </html>
    `;

    res.end(htmlContent);
});

const port = 3000;
server.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})