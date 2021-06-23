import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar/Navbar';
import Backdrop from './components/navbar/backdrop';
import Sidedrawer from './components/navbar/sidedrawer'
import { useState } from 'react';
function App() {
  const [open, setOpener] = useState(false);
  function toggler(toggle){
    setOpener(toggle);
  }
  return (
    <div>
      <Navbar toggler={()=>toggler(true)}/>
      <Backdrop open={open} toggler={()=>toggler(false)}/>
      <Sidedrawer open = {open}/>
    </div>
  )
}

export default App;
