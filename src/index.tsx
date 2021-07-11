import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Dashboard, SignIn } from './components';
import './styles.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
//  imports for firebase
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
//import 'firebase/auth';
//import { firebaseConfig } from './firebaseConfig';

ReactDOM.render(
  <React.StrictMode>
    {/* <FirebaseAppProvider firebaseconfig={firebaseConfig}> */}
    <Provider store = { store }>
    <Router>
      <Switch>

      <Route exact path='/'>
        <Home title={'Marvel Heroes'}/>
      </Route>

      <Route path='/dashboard'>
        <Dashboard></Dashboard>
      </Route>

      <Route path='/signin'>
        <SignIn></SignIn>
      </Route>

      </Switch>
    </Router>
    </Provider>
    {/* </FirebaseAppProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
