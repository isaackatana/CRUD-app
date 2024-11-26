const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js")
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes

app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send("Hello from Node API");
});

// Connect to Database
mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log("Database connected");
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port http://localhost:${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error("Database connection failed:", err.message);
    });
