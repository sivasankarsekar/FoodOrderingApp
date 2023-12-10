import './App.css';
import AppBar from './components/Header/appbar';
import MainComponent from './components/MainComponent/MainComponent';
import Footer from './components/Footer/footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FoodList from './components/FoodList/FoodList';
import Cart from './components/Cart/cart';
import Checkout from './components/Checkout/checkout';
import Contact from './components/Contact/contact';
import Status from './components/Status/status';
import { Provider } from 'react-redux';
import Store from '../src/store/store'


function App() {
  return (

    <div className="App">
      <Provider store={Store}>
      <BrowserRouter>
        <AppBar />
        <Routes>
           <Route path="/" element={<MainComponent />} /> 
          <Route path="/foodList" element={<FoodList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/status" element={<Status/>} />          
        </Routes>
        <Footer />
      </BrowserRouter>
      </Provider>
    </div>
    
  );
}

export default App;
