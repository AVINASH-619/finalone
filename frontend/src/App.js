import './App.css';
import Nav from './nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home';
import Login from './components/login';
import Createpoll from './components/createpoll';
import results from './components/results';
import Signup from './components/signup';
import Err from './components/err';
import Protected from './components/Protected';
import Candidate from './components/candidate';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/results' component={results}></Route>
        <Route exact path='/candidate' component={Candidate}></Route>
        <Route exact path='/signup' component={Signup}></Route>
        <Route exact path='/protected' component={Protected}></Route>
        <Route exact path='/createpoll' component={Createpoll}></Route>
        <Route exact path='*' component={Err}></Route>
        <Protected path='/createpoll' auth={false} component={Createpoll}/>
      </Switch>
    </Router>
  );
}

export default App;
