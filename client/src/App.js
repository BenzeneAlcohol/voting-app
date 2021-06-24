import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar/Navbar';
import Backdrop from './components/navbar/backdrop';
import Sidedrawer from './components/navbar/sidedrawer';
import {getPolls} from './actions/polls'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {useDispatch} from 'react-redux'
function App() {
  const [open, setOpener] = useState(false);
  function toggler(toggle){
    setOpener(toggle);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPolls());
  }, [dispatch])

  const polls = useSelector((state)=>state.polls)
  console.log(polls);

  return (
    <div>
      <Navbar toggler={()=>toggler(true)}/>
      <Backdrop open={open} toggler={()=>toggler(false)}/>
      <Sidedrawer open = {open}/>
    </div>
  )
}

export default App;
