// install express with `npm install express` 
const express = require('express')
const app = express()
const { tabloParser } = require('./parser.js')
app.get('/', (req, res) => res.send('Hello World!'))
const BASEURL="https://iptvcat.com/"
const SEARCHURL=BASEURL+"s/"
app.get('/api', async (req, res) => {
    res.send(await tabloParser(BASEURL+"turkey_-_-_-_-_-_-_-_-_-_-_-_-_-_-"))

})
app.get('/api/:search/:pageing', async (req, res) => {
    const search=req.params["search"]
    const pageing=req.params["pageing"]
  
    res.send(await tabloParser(SEARCHURL+search+"/"+pageing))

})

// export 'app'
module.exports = app



// const port = 3000
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })