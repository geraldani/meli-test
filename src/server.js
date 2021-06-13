const express = require('express');
const clientItem = require('./services/items.client')
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/items', async (req, res) => {
  res.send(await clientItem.getItemsList(req.query.q))
});

app.get('/api/items/:id', async (req, res) => {
  res.send(await clientItem.getItemDetails(req.params.id))
});


app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}!`),
);
