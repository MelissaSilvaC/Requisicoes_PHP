/**
 * npm install express --save
 * npm install express-handlebars --save
 */

const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine

app.engine("handlebars", handlebars({defaultlayout: "main"}))
app.set("view engine", "handlebars")
app.set('views', './views')

/**
 * Nas rotas, colocamos os arquivos HTML que estão na pasta views 
 * e fora da pasta layouts 
 */
app.get("/", function(req,res){
    res.render("index")
})

app.get("/consultar", function (req, res) {
    res.render("consultar")
})

app.get("/atualizar", function (req, res) {
    res.render("atualizar")
})

app.listen(8081, function(){
    console.log("Servidor ativo!")
})