/** Chargement du fichier .env */
const dotenv = require('dotenv');
dotenv.config({path: '.env'});

/** Chargement du Framework Express */
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

/** Chargement de Handlebars */
const hbs = require('express-handlebars');
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
}));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

/** Configuration du Body Parser */
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/** Configuration de MongoDB */
const mongoose = require('mongoose');
const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

/** Chargement des assets */
app.use('/public', express.static(__dirname + '/public'));

/** Chargement de nos routes */
const appRouter = require('./src/routes/app-routes');
app.use('/', appRouter);

/** Démarrer le serveur express */
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
    console.log(`Press CTRL + C to stop\n`);
});

