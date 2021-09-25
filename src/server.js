const express = require('express');
const app = express();
const port = process.env.PORT || 3333;

//routers
const routes = require("./routes")


//apply middleware default (global)
app.use(express.json())
app.use(routes)

//listen to server
app.listen(port, () => console.log(`server working on ${port}`));