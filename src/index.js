import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route }  from 'react-router-dom';
import { routes } from './routes';

ReactDOM.render(
    <Router>
      <App />
        {routes.map(route => {
          return (
            <Route 
            key={route.path} 
            path={route.path} 
            exact
            >
              <route.component/>
            </Route>
          )
        })}
    </Router>,
  document.getElementById('root')
);