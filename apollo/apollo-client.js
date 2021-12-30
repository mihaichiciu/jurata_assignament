import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

const restLink = new RestLink({
  uri: process.env.NEXT_PUBLIC_API_URI,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_AUTHORIZATION_KEY}`,
  },
});

const client = new ApolloClient({
  link: restLink,
  connectToDevTools: true,
  cache: new InMemoryCache(),
});

export default client;
