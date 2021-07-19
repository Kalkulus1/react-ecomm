import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './back/components/Layout';
import Home from './front/general/Home';

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>

          <Route exact path="/" component={Home} />

          <Route path="/admin" name="Admin" render={(props) => <Layout {...props} />} />
          

        </Switch>

      </Router>
    </div>
  );
}

export default App;
