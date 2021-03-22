const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');

const app = express();
const PORT = 3006;

mongoose.connect('mongodb+srv://anton:Y8r5akif10@cluster0.oe7ev.mongodb.net/films?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error: ${err}`));
dbConnection.once('open', () => console.log('Connected to DB'));


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(PORT, err => {
    err ? console.log(err) : console.log('Server started!');
});
