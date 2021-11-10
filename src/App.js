import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';

function App() {

  const [navbarClickable, setNavbarClickable] = useState('false')

  return (
    <div className="App">
      <Header navbarClickable={navbarClickable} setNavbarClickable={setNavbarClickable}/>
      <Main navbarClickable={navbarClickable}/>
    </div>
  );
}

export default App;
