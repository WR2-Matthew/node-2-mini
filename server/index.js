const express = require('express');
const SERVER_PORT = 4987
const ctrl = require('./controllers/controller')
const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/../build"));

app.get("/api/books", ctrl.read);
app.post("/api/books", ctrl.create);
app.put("/api/books/:id", ctrl.update);
app.delete("/api/books/:id", ctrl.delete);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${port}`);
});