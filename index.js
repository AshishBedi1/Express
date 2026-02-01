const express = require('express');

const PORT = 3000;
const app = express();

app.get('/', (req,res) => {
    return res.send("hello from home page")
});

app.get('/about', (req,res) => {
    return res.send("yo these is an about page" + "hey" + req.query.name)
})

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
})