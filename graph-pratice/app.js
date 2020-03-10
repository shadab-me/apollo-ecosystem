const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();


app.use('', graphqlHTTP({



}));
app.listen(3000, () => {
    console.log('Connecting')
})