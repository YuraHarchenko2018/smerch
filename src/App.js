import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from './header/Header'
import MainPage from './container/main/MainPage'
import ProductPage from './container/product/ProductPage'
import LoginPage from './container/login/LoginPage'
import AccountPage from './container/account/AccountPage'
import CartPage from './container/cart/CartPage'
import Footer from './footer/Footer'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="cart" element={<CartPage />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
