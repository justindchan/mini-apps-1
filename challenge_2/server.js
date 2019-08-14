const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded())
app.use(express.static('client'))

app.listen(port, () => console.log(`example app listening on port ${port}!`))

// app.get('/', (req, res) => {
//   res.send('Hello World!')})

app.post('/', (req, res) => { 
  var data = req.body.value;
  var results = [];
  let parse = JSON.parse(data.slice(0, data.length -1));
  
  function makeCsv(jsonObj) {
    let personArr = [];
    for (let key in jsonObj) {
      if (key !== "children") {
        personArr.push(jsonObj[key]);
      } else if (key === 'children') {
        results.push(personArr.join(','));
        if (jsonObj[key].length !== 0) {
          jsonObj[key].forEach((child) => {
            makeCsv(child)
          })
        }
      }
    }
  }
  makeCsv(parse)        
  // console.log()
  res.send(results.join("<br>"));

})



