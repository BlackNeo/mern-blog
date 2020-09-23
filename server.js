const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config({ path: 'ENV_FILENAME' });

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => 
    console.log("Mongoose est bien connecté")
);

const articlesRouter = require('./routes/articles');
app.use('/articles', articlesRouter);

app.listen(port, () => console.log(`Application tournant sur le port : ${port} `)
);