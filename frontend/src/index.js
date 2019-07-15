import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import './config/style/index.scss';

import 'reset-css';

import App from './App';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://0.0.0.0:4000/graphql',
  headers: {
    authorization: localStorage.getItem('api_token'),
  },
});
const client = new ApolloClient({
  link,
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);
