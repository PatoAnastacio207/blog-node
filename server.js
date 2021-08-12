const express = require('express')
const articleRouter = require('./routes/articles')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost/blog', { 
    useNewUrlParser: true,  
    useUnifiedTopology: true 
})

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    const articles = [
        {
            title: "Test article 1",
            dateCreated: new Date(),
            description: "Article for testing purposes"
        },
        {
            title: "Test article 2",
            dateCreated: new Date(),
            description: "Article for testing purposes"
        }
    ]
    res.render('articles/index', {articles: articles}) 
})

app.use('/articles', articleRouter)


app.listen(5000)
