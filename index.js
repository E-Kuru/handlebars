const express = require("express")
const app = express()

const engine = require("express-handlebars").engine
app.engine("handlebars", engine())
app.set("view engine", "handlebars")

app.use(express.urlencoded({ extended: true }))

app.get('/', (req,res) => {
    res.render('register',{
        layout : 'main'
    })
    
})

app.post('/house', (req, res) => {
    res.render('house', {
        layout : 'main'
    })
    console.log(req.body)
})  

const port = 5000
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})