import { ApolloServer } from 'apollo-server-express';
import schema from './graphql';
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import models from './database/models';
import { getUser, roleCheck } from './utils/isAuthenticated';
dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();

const server = new ApolloServer({
  schema,
  context: async ({ req }) => {
    const tokenWithBearer = req.headers.authorization || ' ';

    // token parse
    const token = tokenWithBearer.split(' ')[1] || null;

    const user = getUser(token);
    return { models, user, roleCheck, req };
  },
});

let morganMode = '';
let corsOriginHeader = '';

if (process.env.NODE_ENV !== 'production') {
  morganMode = 'dev';
  corsOriginHeader = '*';
} else {
  corsOriginHeader = process.env.ORIGIN_HEADER;
  morganMode = 'combined';
}

app.use(cors({ origin: corsOriginHeader }));
app.use(morgan(morganMode));
server.applyMiddleware({ app });

app.listen(PORT, '0.0.0.0', () =>
  console.log(`🚀 Server Runnings http://localhost:${PORT}`)
);
