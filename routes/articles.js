const express = require('express')
const router = express.Router()
const Article = require('./../models/article')

router.get('/new', (req, res) => {
    res.render('articles/new')
})

router.get('/:id', (req, res) => {

})

router.post('/', async (req, res) => {
    let article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })
    try {
        article = await article.save()
        res.redirect(`/articles/${article.id}`)
        console.log(`cargado el articulo: ${req.body.title}`)
    } catch(e) {
        res.render('articles/new', { article: article })
        console.log(e)
    }
    
    
})

module.exports = router