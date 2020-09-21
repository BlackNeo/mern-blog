const express = require('express');
const router  = express.Router();

const Articles = require('../models/articles');

// Request get all articles
router.get('/', (req, res) => {
    Articles.find()
        .then(article => res.json(article))
        .catch(err => res.status(400).json(`Error : ${err}`));
});

// Request add new article
router.post('/add', (req,res) => {
    const newArticle = new Articles({
        title:   req.body.title,
        article: req.body.article,
        author:  req.body.author
    })

    newArticle
        .save()
        .then(() => res.json('Article correctement aujouté à la base de donnée ! '))
        .catch(err => res.status(400).json(`Error : ${err}`));
});

// Request find article by id
router.get('/:id', (req, res) => {
    Articles.findById(req.params.id)
        .then(article => res.json(article))
        .catch(err => res.status(400).json(`Error : ${err}`));
});

// Request find article by id and update
router.put('/update/:id', (req, res) => {
    Articles.findById(req.params.id)
        .then(article => {
            article.title   = req.body.title;
            article.article = req.body.article;
            article.author  = req.body.author;
        
            article
                .save()
                .then(() => res.json("Article correctement mis à jour !"))
                .catch(err => res.status(400).json(`Error : ${err}`));
        })
        .catch(err => res.status(400).json(`Error : ${err}`));
});

// Request find article by id and delete
router.delete('/:id', (req, res) => {
    Articles.findByIdAndDelete(req.params.id)
        .then(() => res.json("Article correctement supprimé !"))
        .catch(err => res.status(400).json(`Error : ${err}`));
});

module.exports = router;