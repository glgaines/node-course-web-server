const express = require('express');
const fs = require('fs')

const app = express();
//app.set('view engine', 'html')



app.use((req, res, next) => {
  let now = new Date().toString();
  let log = `${now}: ${req.method}  ${req.url}`;
  fs.appendFile('server.log', log + '\n', (err) => {
    if(err) {
      console.log('unable to append to server log')
    }
  })
  console.log(log)
  next()
})

// app.use((req, res, next) => {
//   res.render("maintanence.html")
// })

app.use(express.static(__dirname + '/public'));
app.get("/", (req, res) => {
  res.send({
    name:'Andrew',
    likes:["biking", "walking"]
  })
});



app.get("/about", (req, res) => {
  res.send('About Page');
});

app.get("/bad",(req, res) => {
  res.send({
    errorMessage: "this is bad"
  });
});
app.listen(3000, () => {
  console.log("server on  port 3000")
});
