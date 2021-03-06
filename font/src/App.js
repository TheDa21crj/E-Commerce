import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import MyAccount from "./Pages/MyAccount";
import Error from "./Pages/Error";
import AdminLogin from "./Pages/AdminLogin";
import PostContent from "./Pages/PostContent";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Logout from "./Pages/Logout";
import Membership from "./Pages/Membership";
import ProductsDeatils from "./Pages/ProductsDeatils";
import Cart from "./Pages/Cart";
import ShopCart from "./Pages/ShopCart";
import Loading from "./Pages/Loading";
import Tag from "./Pages/Tag";
import Gender from "./Pages/Gender";
import MerchandiseLink from "./Pages/MerchandiseLink.jsx";
import PrivateRoute from "./route/PrivateRouting";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Membership" element={<Membership />} />
            <Route path="/products/:id" element={<ProductsDeatils />} />
            <Route path="/wishlist" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route exact path="/my-account" element={<PrivateRoute />}>
              <Route exact path="/my-account" element={<MyAccount />} />
            </Route>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/post-content" element={<PostContent />} />
            <Route path="/ShopCart" element={<ShopCart />} />
            <Route path="/Loading" element={<Loading />} />
            <Route path="/categories/:gender/:tag" element={<Tag />} />
            <Route path="/categories/:gender" element={<Gender />} />
            <Route path="/MERCHANDISE/:link" element={<MerchandiseLink />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
