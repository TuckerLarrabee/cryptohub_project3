import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Profile from './pages/Profile.js';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import { StoreProvider } from './utils/GlobalState';
import OrderHistory from './pages/OrderHistory';
import Sidebar from './components/Sidebar/Sidebar';
import { News } from './pages/News';
import { Exchanges } from './pages/Exchanges';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Sidebar />
            <Switch>
              <Route exact path="/" component={Home} />
              {/* If logged in, profile link is available  */}
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/news" component={News} />
              <Route exact path="/exchanges" component={Exchanges} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route component={NoMatch} />
            </Switch>
          </StoreProvider>
          <Footer></Footer>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
