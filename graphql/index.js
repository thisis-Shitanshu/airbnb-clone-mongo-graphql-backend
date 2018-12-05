import {
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql';

// Import custome file(s) here.
import mutations from './mutations';

export default new GraphQLSchema({
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutations
    })
});