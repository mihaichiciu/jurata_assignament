import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo/apollo-client';
import Layout from '../components/Layout/Layout';

const App = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
};

export default appWithTranslation(App);
