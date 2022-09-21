import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import CartPage from "../pages/Cart/CartPage";
import UserPage from "../pages/User/UserPage";
import AdminPage from "../pages/User/Admin/AdminPage";
import ProductsPage from "../pages/Products/ProductsPage";
import ProductPage from "../pages/Products/Product/ProductPage";
import AboutPage from "../pages/About/AboutPage";
import SharedLayout from "../components/layout/SharedLayout";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="product/id=:productId" element={<ProductPage />} />
          <Route path="user/id=:userId" element={<UserPage />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
