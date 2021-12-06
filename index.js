const express = require("express");
const app = express();
const cors = require("cors");
const database = require("./database");
const posts = require('./posts.json');
const fs = require('fs');
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.get("/",(request,response,next)=>{
  response.send(posts);
})

app.post('/', (request, response, next)=>{
  fs.writeFile(
    'posts.json', 
    JSON.stringify([...posts,request.body]), 
    (err) => {
    if (err) {
      console.log('error', err)
     return response.status(500).send('Error on the Server');
    }
    return response.send([...posts,request.body]);
  });
})



app.set("PORT", process.env.PORT || PORT);
app.listen(app.get("PORT"), (server) => {
  console.info(`Started on PORT:${app.get("PORT")}`);
});
