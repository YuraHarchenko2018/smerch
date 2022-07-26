import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from './header/Header'
import Container from './container/Container'
import ProductPage from './container/components/ProductPage'
import Footer from './footer/Footer'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="own-account" element={<div>own-account</div>} />
          <Route path="cart" element={<div>Корзина</div>} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
