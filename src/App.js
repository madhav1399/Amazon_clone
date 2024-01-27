import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={[<Login />]}/>
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/" element={[<Header />, <Home />]}/>
        </Routes>
      </div>
    </Router>
  );
}


// Additional component for the /checkout route
/*function Checkout() {
  return (
    <div>
      <Header />
      <h1>Checkout</h1>
    </div>
  );
}
*/
export default App;
