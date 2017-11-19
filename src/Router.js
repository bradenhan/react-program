import React from 'react';
import { BrowserRouter as Router,  Route, Link } from 'react-router-dom'

import './less/component/router.less';  

import Game from './component/ticTacToe'; 
import ShoppingList from './component/ShoppingList';
import Demo1 from './component/Demo1';


const BasicExample = () => (
  <Router>
    <div className="router">
      <ul>
        <li><Link to="/">tic-tac-toe</Link></li>
        <li><Link to="/demo1">Demo1</Link></li>
        <li style={{fontSize : 0}}><Link to="/about">About</Link></li>
        <li style={{fontSize : 0}}><Link to="/topics">Topics</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={TicTacToe} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path="/demo1" component={Demo1} />
    </div>
  </Router>
)

const TicTacToe = () => (
  <div> 
    <Game />
  </div>
)

const About = () => (
  <div> 
    <ShoppingList name="Mark"/>
  </div> 
)

const demo1 = () => (
  <div> 
    <Demo1 />
  </div> 
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)


export default BasicExample;
