const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router/index')
const cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(cors())
//解决跨域问题

app.use(router)

app.listen(3000,function () {
  console.log("running...")
})
