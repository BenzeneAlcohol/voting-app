import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar/Navbar';
import Backdrop from './components/navbar/backdrop';
import Sidedrawer from './components/navbar/sidedrawer';
import Polls from './components/polls/Polls'
import {getPolls} from './actions/polls'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute';
import CreatePoll from './components/createpoll/Createpoll';
import Vote from './components/vote/Vote'
import Results from'./components/results/Results';
function App() {
  const [open, setOpener] = useState(false);
  function toggler(toggle){
    setOpener(toggle);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPolls());
  }, [dispatch])
  return (
    <Router>
      <div>
        <Navbar toggler={()=>toggler(true)}/>
        <Backdrop open={open} toggler={()=>toggler(false)}/>
        <Sidedrawer open = {open}/>
        <Switch>
          <Route exact path="/login" component={Signin}/>
          <Route exact path="/register" component={Signup}/>
          <Route exact path="/" component={Polls}/>
          <PrivateRoute exact path="/create" component={CreatePoll} />
          <PrivateRoute exact path="/polls/:id" component={Vote} />
          <PrivateRoute exact path="/polls/results/:id" component={Results} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
