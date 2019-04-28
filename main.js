'use strict'

const Sequelize = require('sequelize');


const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'rusia2018.sqlite'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  sequelize.query("SELECT * FROM selecciones")
  	.then(myTableRows => {
  	console.log(myTableRows)
});