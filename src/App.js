import './App.css';
import { lazy, Suspense, useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import { userIsLoggedIn } from './services/auth/auth';
import {
  AppBar, IconButton, Toolbar, Typography
}from "@mui/material";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LogoutIcon from '@mui/icons-material/Logout';

const Cart = lazy(() => import('./pages/cart/cart'));
const Catalog = lazy(() => import('./pages/catalog/catalog'));
const Checkout = lazy(() => import('./pages/checkout/checkout'));
const Product = lazy(() => import('./pages/product/product'));
const Register = lazy(() => import('./pages/register/register'));
const Login = lazy(() => import('./pages/login/login')); 
const NotFound = lazy (() => import('./pages/not-found/not-found'))

function App() {
  useEffect(() => {
  }, [])

  return (
  <Router>
    <AppBar position={'static'}>
      <Toolbar style={{
        justifyContent: "space-between",
      }}>
        <Typography variant="h6" component="div">
          <Link to="/catalog">Loja</Link>
          </Typography>
          <div>
         <Link to="/cart">
           <IconButton>
              <ShoppingBagIcon/>
          </IconButton>
        </Link>
          <Link to="/login">
            <IconButton>
              <LogoutIcon/>
            </IconButton>
          </Link>
          </div>
      </Toolbar>
    </AppBar>
    <Suspense fallback={'Carregando...'}>
      <Routes>
        <Route exact path='/' element={<Catalog/>}/>
        <Route exact path='/catalog' element={<Catalog/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/checkout' element={<Checkout/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Suspense>
  </Router>);
}

export default App;
