import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Header from './Components/Header';
import CardContainer from './Components/CardContainer';
import NewImageForm from './Components/NewImageForm';

import Login from './Components/Login';
import Signup from './Components/Signup';

const App = () => {

  return (
    <div className="App">
      <Router>

        <Header />

        <Switch>

          <Route exact path="/" component={() => {
            return <CardContainer />
          }}/>

          <Route path="/new_post" component={() => {
            return <NewImageForm />
          }}/>

          <Route exact path="/signup" component={() => {
            return <Signup />
          }}/>

          <Route path="/login" component={() => {
            return <Login />
          }}/>

          <Route component={() => {
            return <Redirect to='/' />
          }}/>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
