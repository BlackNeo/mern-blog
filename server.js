const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.port || 8080;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://webo:1234@cluster0.r9dta.mongodb.net/mern_blog?retryWrites=true&w=majority";

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

app.listen(8080, () => {console.log(`Application tournant sur le port : ${port} `)
});