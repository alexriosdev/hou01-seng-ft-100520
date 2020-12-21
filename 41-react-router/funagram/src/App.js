import React from 'react';

import Header from './Components/Header';
import CardContainer from './Components/CardContainer';
import NewImageForm from './Components/NewImageForm';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>

          <Header />

          <Switch>

            <Route exact path="/" component={() => {
              return <CardContainer removePost={this.removePost} />
            }}/>

            <Route path="/new_post" component={() => {
              return <NewImageForm />
            }}/>

            <Route exact path="/signup" component={() => {
              return <> Signup </>
            }}/>

            <Route path="/login" component={() => {
              return <> Login </>
            }}/>

            <Route component={() => {
              return <Redirect to='/' />
            }}/>

          </Switch>

        </Router>
      </div>
    );
  }
}

export default App;
