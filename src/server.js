//configurações do servidor
const express = require('express')
const server = express()
const nunjucks = require("nunjucks")

const {pageLanding, pageStudy, pageGiveClasses, saveClasses } = require("./pages")

//configura nunjucks
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configua arquivos estaticos
server
.use(express.urlencoded({extended: true}))
.use(express.static("public"))

//rotas
.get("/",pageLanding)
.get("/study",pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)
