// const express = require('express');
// const app = express();
// const port = 3000;

// // Middleware to parse JSON bodies
// app.use(express.json());
/*
Get => retrieve data.
Post => submit data to the server.
Put => update an existing resource entirely.
Patch =>update an existing resource partially.
Delete => Delete an existing resource.

*/
// // GET method route
// app.get('/resource', (req, res) => {
//     res.send('GET request to the resource');
// });

// // POST method route
// app.post('/resource', (req, res) => {
//     const data = req.body;
//     res.send(`POST request to the resource with data: ${JSON.stringify(data)}`);
// });

// // PUT method route
// app.put('/resource/:id', (req, res) => {
//     const id = req.params.id;
//     const data = req.body;
//     res.send(`PUT request to resource with ID ${id} and data: ${JSON.stringify(data)}`);
// });

// // PATCH method route
// app.patch('/resource/:id', (req, res) => {
//     const id = req.params.id;
//     const data = req.body;
//     res.send(`PATCH request to resource with ID ${id} and data: ${JSON.stringify(data)}`);
// });

// // DELETE method route
// app.delete('/resource/:id', (req, res) => {
//     const id = req.params.id;
//     res.send(`DELETE request to resource with ID ${id}`);
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
