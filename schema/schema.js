const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;

const movies = [
    { id: '1', name: 'The grand father', genre: 'Action'},
    { id: '2', name: 'Good day', genre: 'Action'},
    { id: '3', name: 'Dorian Gray', genre: 'Action'},
    { id: '4', name: 'Power rangers', genre: 'Sci-Fi'},
]

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
    }),
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        movie: {
            type: MovieType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return movies.find(movie => movie.id === args.id);
            },
        },
    }
});

module.exports = new GraphQLSchema({
    query: Query,
});