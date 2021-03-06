import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Landing from './landing';
import Dashboard from './dashboard';
import '../style/main.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <header>
              <h1>ToDo</h1>
              <nav>
                <ul>
                  <li><Link to='/'>home</Link></li>
                  <li><Link to='/dashboard'>dashboard</Link></li>
                </ul>
              </nav>
            </header>
            <Route exact path='/' component={ Landing }/>
            <Route exact path='/dashboard' component={ Dashboard }/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
