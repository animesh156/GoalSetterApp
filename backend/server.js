const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send("Hello express")
})

app.listen(8000, () => {
    console.log('app is listening at 8000')
});