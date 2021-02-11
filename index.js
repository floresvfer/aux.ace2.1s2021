const express = require('express')
const app = express()
const port =  process.env.PORT || 3000
var sequelize = require('./definitions.js');

app.get('/', (req, res) => {
  res.send('Hello World!')
})




assertDatabaseConnectionOk()
    .then(() => {
      console.log('syncing...')
      return sequelize.sync({ alter: true });
    })
    .then(() => {
      console.log('database ok.')
      /*server.listen(port);
      server.on('error', onError);
      server.on('listening', onListening);*/
        app.listen(port, () => {
          console.log(`Example app listening at http://localhost:${port}`)
        });
    });


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
