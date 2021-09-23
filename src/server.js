const express = require('express');
const app = express();
const port = process.env.PORT || 3333;

app.get('/', (req, res) => res.send('test'))

app.listen(port, () => console.log(`server working on ${port}`));