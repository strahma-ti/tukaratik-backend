require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const moment = require('moment');

const userRoutes = require('./routes/userRoutes');
const wasteRoutes = require('./routes/wasteRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const port = process.env.PORT || 41507;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

app.use('/users', userRoutes);
app.use('/waste', wasteRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/orders', orderRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
