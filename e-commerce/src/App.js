import './App.css';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import Home from './pages/Home';
import Product from './pages/Product/Product';
import Register from './pages/Register/Register';
import ProductList from './pages/ProductList/ProductList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate, // Import Navigate for navigation in v6
} from 'react-router-dom';
import Success from './pages/Success/Success';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(state=>state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:categories' element={<ProductList />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Success' element={<Success />} />
        <Route
          path='/login'
          element={user ? <Navigate to='/' /> : <Login />}
        />
        <Route path='/register' element={user ? <Navigate to='/' /> : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;
