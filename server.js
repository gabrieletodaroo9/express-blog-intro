const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send("Server del mio blog")
})

app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT}`)
})