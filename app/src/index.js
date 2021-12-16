require('dotenv').config()
const express = require('express')
const sendToHubspot = require('./integrators/registerDatabase')
const router = require('./routes')
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(router)

app.listen(PORT, async () => {
    console.log(`server running port ${PORT}`)
    const listId = await sendToHubspot()
    process.env.LIST_ID = listId
})

