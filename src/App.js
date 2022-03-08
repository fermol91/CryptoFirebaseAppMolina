import './App.css';
import React from 'react';

//React - Router - dom
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//Views
import Home from './Views/Home/Home';
import About from './Views/About/About';
import Contact from './Views/Contact/Contact';
import CoinDetail from './Views/CoinDetail/CoinDetail';
import GenderType from './Views/GenderType/GenderType';
import Trade from './Views/Trade/Trade';


//Components
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import TradeContextProvider from './Context/TradeContext';






function App() {
  return (
    <Router>
      <div className="App">
        <TradeContextProvider>
        <Header />
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
            <Route path='/trade' element={<Trade />} />
            <Route path='/details/:id' element={<CoinDetail />} />
            <Route path='/gender/:gender' element={<GenderType />} />
            
        </Routes>
        </TradeContextProvider>
      </div>  
    </Router>
  );
};

export default App;
