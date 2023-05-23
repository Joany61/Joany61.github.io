let express = require('express')
let parser = require('body-parser')
let router = require('./apiRouter').router
let app = express()

//middleware avec express
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json()); 

//middleware personnel
app.use('/api/', router);

//pour le premier route
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html') //entete
        //corps et le resultat de la requete
    res.status(200).send('<h2>bonjour</h2>')
})

app.listen(8040, () => {
    console.log('server running')
})