import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { routes } from './routes';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <App />
      {routes.map((route) => {
        return (
          <Route key={route.path} path={route.path} exact>
            <route.component />
          </Route>
        );
      })}
    </Router>
  </QueryClientProvider>,
  document.getElementById('root'),
);
