const express = require("express")
const bodyParser = require ("body-parser")

const sqlite3 = require('sqlite3')
const{open} =require('sqlite')

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

open({
    filename: "./db/TESTABOB.db",
    driver: sqlite3.Database
}).then((db)=>{
    app.get('/people', async(req, res)=>{
        const people = await db.all("SELECT * FROM People")
        res.json(people)
    })
    app.listen(3000,()=>{
        console.log("rabotaet"+3000)
    })
})

open({
    filename: "./db/TESTABOB.db",
    driver: sqlite3.Database
}).then((db)=>{
    app.get('/team', async(req, res)=>{
        const people = await db.all("SELECT * FROM Team")
        res.json(people)
    })
})


// expres nodemon sqlite sqlite3 установить