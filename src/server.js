const express = require('express')
const cors = require('cors')
const clientItem = require('./services/items.client')
const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())

app.get('/api/items', async (req, res) => {
  res.send(await clientItem.getItemsList(req.query.q))
})

app.get('/api/items/:id', async (req, res) => {
  try {
    res.send(await clientItem.getItemDetails(req.params.id))
  } catch (e) {
    console.error('Error al traer la data ',e);
    res.status(e.response.status).send({message: `Error, ${e.message}`, code: e.response.status});
  }
})

app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}!`),
)
