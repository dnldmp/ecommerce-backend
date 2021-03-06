const express = require('express')
const data = require('./data')

const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products)
})

app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x=> x._id === productId)
    if(product){
        res.send(product)
    }else{
        res.status(404).send({msg: "Product Not Found."})
    }
})

app.listen(process.env.PORT || 5000)