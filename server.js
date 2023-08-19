require('dotenv').config()
const express = require('express');
const cors = require('cors')
const mongoose = require("mongoose");
const productRoute = require("./routes/productRioute");
const errorMiddleware = require("./middleware/errorMiddleware");
const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const FRONTEND_URL = process.env.FRONTEND_URL;

const corsOptions = {
    origin: FRONTEND_URL,
    optionsSuccessStatus: 200
}

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes
app.use('/api/products', productRoute);

// error middleware
app.use(errorMiddleware);

mongoose.set('strictQuery', false);
mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
    }).catch((err) => {
    console.log("Error connecting to MongoDB", err);
});