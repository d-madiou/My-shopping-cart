import { Route, Routes } from 'react-router-dom';
import Cart from './component/Cart';
import './index.css'; // Ensure this is correctly referenced
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';


function App(){
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
  );
}

export default App;
