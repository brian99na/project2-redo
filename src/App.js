import './App.css';
import Header from './components/Main/Header';
import Main from './components/Main/Main';
import { useState } from 'react';

function App() {

  const [navbarClickable, setNavbarClickable] = useState('false')

  const handleRoutePageClass = navbarClickable ? '' : 'routePageUnclickable';
  const routePageClass = `routePage ${handleRoutePageClass}`

  return (
    <div className="App">
      <Header routePageClass={routePageClass} navbarClickable={navbarClickable} setNavbarClickable={setNavbarClickable}/>
      <Main routePageClass={routePageClass} navbarClickable={navbarClickable}/>
    </div>
  );
}

export default App;
