import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './pages/Cart/Cart';
import Shop from './pages/Shop/Shop';
import ShopContextProvider from '../src/context/ShopContextProvider'

function App() {
  return (
    <ShopContextProvider>
      <div className="App">
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Shop />}/>
              <Route path='/cart' element={<Cart />}/>
            </Routes>
          </Router>

        
      </div>

    </ShopContextProvider>
  );
}

export default App;
