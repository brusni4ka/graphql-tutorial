/*import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';*/

export const typeDefs = `
  type Channel {
    id: ID!
    name: String
  }
  
  # the schema allows the following query:
  
  type Query {
    channels: [Channel]
  }
`;

/*
const schema = makeExutableSchema( {typeDefs} );
export {schema}*/
