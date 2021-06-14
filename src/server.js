const express = require('express')
const cors = require('cors')
const { getItemsList } = require('./services/items.getList')
const { getItemDetails } = require('./services/items.getDetails')
const app = express();

const PORT = process.env.BACK_PORT || 3001

app.use(cors())

app.get('/api/items', async (req, res) => {
  try {
    res.send(await getItemsList(req.query.q))
  }catch (e) {
    res.status(e.response.status).send(`Error, ${e.message}`);
  }
})

app.get('/api/items/:id', async (req, res) => {
  try {
    res.send(await getItemDetails(req.params.id))
  } catch (e) {
    console.error('Error al traer la data ',e);
    res.status(e.response.status).send({message: `Error, ${e.message}`, code: e.response.status});
  }
})

app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}!`),
)
