const express = require('express');
const app = express();
const port = process.env.PORT || 80


//Models
const sequelize = require('./conn');

//Enable CORS
const cors = require('cors');
app.use(cors());

//Enable to add Json body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


//Routes Definitions
const productsRouter = require('./api-routes/products');
app.use('/products', productsRouter);


//Index page
app.get('/', (req, res) => {
    res.send('Hello World!')
})


//Intitializing
assertDatabaseConnectionOk()
    .then(() => {
        console.log('syncing...');
        return sequelize.sync({alter: true});
    })
    .then(() => {
        console.log('database ok.');
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
        });
    });


//Utils
async function assertDatabaseConnectionOk() {
    console.log(`Checking database connection...`);
    try {
        await sequelize.authenticate();
        console.log('Database connection OK!');
    } catch (error) {
        console.log('Unable to connect to the database:');
        console.log(error.message);
        process.exit(1);
    }
}
