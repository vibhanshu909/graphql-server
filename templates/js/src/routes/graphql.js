import { ApolloServer, gql } from "apollo-server-lambda";

const typeDefs = gql`
  type Query {
    hello: String
  }
  type Mutation {
    double(x: Int!): Int!
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
  Mutation: {
    double: (_, { x }) => x * 2,
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  tracing: true,
});

const graphqlHandler = apolloServer.createHandler();

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
const handler = async (args) => {
  return await new Promise((resolve, reject) => {
    graphqlHandler(
      {
        httpMethod: args.method,
        headers: args.headers,
        path: args.path,
        body: args.rawBody,
      },
      {},
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve({
            status: result.statusCode,
            body: result.body,
            headers: result.headers,
          });
        }
      }
    );
  });
};

export const head = handler;
export const get = handler;
export const post = handler;
