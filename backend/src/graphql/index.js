import { makeExecutableSchema } from 'apollo-server-express';
import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';

const allTypes = fileLoader(path.join(__dirname, './**/*.graphql'));
const allResolvers = fileLoader(path.join(__dirname, './**/*.js'));

const schema = makeExecutableSchema({
  typeDefs: mergeTypes(allTypes),
  resolvers: mergeResolvers(allResolvers),
});

export default schema;
