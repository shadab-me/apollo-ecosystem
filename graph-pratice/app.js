const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const schema = require('./schema/schema');


app.use('/graphql', graphqlHTTP({
schema:


}));
app.listen(3000, () => {
    console.log('Connecting')
})

module.exports = new GraphQLSchema({
    query:RootQuery
});      