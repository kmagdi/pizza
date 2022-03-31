const express = require('express')
const cors=require('cors')
const app = express()
//adatbázis csatlakozáshoz:
const mysql =require('mysql');
const configDb=require('./configDb')
const db=mysql.createConnection(configDb)

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    db.query(`select nev,foto from pizza group by nev`,
        (err,results)=>{
            if(err)
                console.log(err)
            else
                res.status(200).send(results)
        })
})

app.get('/:nev',(req,res)=>{
    const {nev}=req.params
    db.query(`select nev,meret,ar from pizza where nev=?`,[nev],
        (err,results)=>{
            if(err)
                console.log(err)
            else
                res.status(200).send(results)
        })
})


app.listen(5000,() => console.log('server listening on port 5000...'))