const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';

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

if (process.env.NODE_ENV === "production"{
    app.use(express.static("build"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname,  "build", "index.html"));
    });
  }

app.listen(PORT, HOST, () => {console.log(`Application tournant sur le port : ${PORT} `)
});