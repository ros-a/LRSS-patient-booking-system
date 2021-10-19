const express = require('express')
const mysql = require('promise-mysql')
const cors = require('cors')
const app = express()
const port = 3001

app.use(cors())

app.post('/patients', function (req, res) {
    res.sendStatus(200)
    //     const connection = await mysql.createConnection({
    //     user: 'root',
    //     password: 'password',
    //     database: 'lrss_2021-10-18'
    // })
    //

    // if(req.body.email === 'test' && req.body.password === 'test') {
    //     res.json('OK');
    // } else {
    //     res.json('error logging in');
    // }
    //
    // const patients = await connection.query('INSERT * FROM `coins`')
})

app.listen(port)