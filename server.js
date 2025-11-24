const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send("Server del mio blog")
})

app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT}`)
})

app.use(express.static('public'))
const desserts = [
    {
        "id": 1,
        "title": "Ciambellone",
        "description": "Il Ciambellone è il classico dolce italiano da credenza, amato per la sua texture soffice e spugnosa. Perfetto per essere inzuppato nel latte o nel tè, è l'emblema della colazione semplice e genuina.",
        "image": "/images/ciambellone.jpeg",
        "tags": ['dolci', 'ciambella']
    },
    {
        "id": 2,
        "title": "Cracker barbabietola",
        "description": "Questi cracker integrali si distinguono per il loro vivace colore viola dato dalla barbabietola, offrendo una consistenza croccante e un sapore delicato, ricco di fibre.",
        "image": "/images/cracker_barbabietola.jpeg",
        "tags": ['cracker', 'barbabietola', 'viola']
    },
    {
        "id": 3,
        "title": "Pane fritto dolce",
        "description": "Dolce di recupero che trasforma il pane raffermo in una vera golosità: croccante fuori e morbido dentro, avvolto in un velo caldo di zucchero e cannella.",
        "image": "/images/pane_fritto_dolce.jpeg",
        "tags": ['pane', 'fritto', 'dolce']
    },
    {
        "id": 4,
        "title": "Pasta barbabietola",
        "description": "Una pasta fresca che affascina con il suo colore rosso rubino naturale e offre un sapore dolce e terroso che si sposa perfettamente con condimenti delicati e cremosi.",
        "image": "/images/pasta_barbabietola.jpeg",
        "tags": ['pasta', 'barbabietola']
    },
    {
        "id": 5,
        "title": "Torta paesana",
        "description": "Dolce della tradizione lombarda nato per riciclare il pane raffermo, si presenta come una torta scura e rustica, ricca di cacao, uvetta e frutta secca.",
        "image": "/images/torta_paesana.jpeg",
        "tags": ['torta', 'paesana']
    },
]

app.get('/bacheca', (req, res) => {
    res.json(desserts)
})
