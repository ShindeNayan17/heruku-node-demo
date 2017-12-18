const express = require('express')
const app = express()
//
// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

// var database = require("./src/database.js");
// database.initDatabase();
//
app.use('/', express.static('static/game'))
// app.use('/login', express.static('static/login'))
// app.use('/hackGame', express.static('static/HW LATEST WEBSITE'))
//
// app.use('/source',express.static('phaser/v2/build/custom'))
// app.use('/build',express.static('phaser/v2/build'))
// app.use('/loginSignUp',express.static('static/loginSignUp'))
// app.use('/phaserDemo',express.static('static/phaserDemo'))
//
// // app.use('/games', express.static('phaser/phaser-examples-master/phaser-examples-master/examples/'))
// app.use('/docs', express.static('phaser/v2/docs'))
// // app.use('/hellophaser', express.static('phaser/v2/resources/tutorials/01 Getting Started/hellophaser'))
// app.use('/gameExample', express.static('phaser/v2/resources/tutorials/02 Making your first game'))
//


app.get("/ping",function (req,res) {
  res.send("pong");

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
