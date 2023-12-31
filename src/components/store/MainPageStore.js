import React, { useState, useEffect } from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';

import Login from './Login/AllAuth/Login/Login';
import Register from './Login/AllAuth/Register/Register';
import ResetPassword from './Login/AllAuth/ResetPassword/ResetPassword';
import ResetSetNewPassword from './Login/AllAuth/ResetSetNewPassword/ResetSetNewPassword'
import ChangePassword from './Login/AllAuth/ChangePassword/ChangePassword';
import LoginsMainPage from './Login/LoginsMainPage';

import HeaderStore from './HeaderStore/HeaderStore';
import StoreStartPage from './StoreStartPage/StoreStartPage';
import StoreProductsPage from './StoreProductsPage/StoreProductsPage';
import SingleProductMain from './SingleProductPage/SingleProductMain';

function MainPageStore() {

  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [singleProduct, setSingleProduct] = useState('');

  return (
    <div>      
      <HeaderStore />
      
      <Routes>
        <Route path="/" element={<StoreStartPage 
          category={category} 
          setCategory={setCategory} 
        />} />

        <Route path="/:category" element={<StoreProductsPage 
          category={category}
          setCategory={setCategory}  
          
          subcategory={subcategory}
          setSubcategory={setSubcategory}
          
          singleProduct={singleProduct}
          setSingleProduct={setSingleProduct}
        />} />

        <Route path="/:category/:subcategory" element={<StoreProductsPage 
          category={category} 
          setCategory={setCategory}  
          
          subcategory={subcategory} 
          setSubcategory={setSubcategory}  
          
          singleProduct={singleProduct}
          setSingleProduct={setSingleProduct}
        />} />

        <Route path=":category/:subcategory/:singleProduct" element={<SingleProductMain 
          singleProduct={singleProduct}
          setSingleProduct={setSingleProduct}
        />} />

        <Route path=":category/:category/:singleProduct" element={<SingleProductMain 
          singleProduct={singleProduct}
          setSingleProduct={setSingleProduct}
        />} />

        <Route path="/logowanie" element={<LoginsMainPage />} />
        <Route path="/rejestracja" element={<Register />} />
        <Route path="/resetuj-hasło" element={<ResetSetNewPassword />} />
        <Route path="/reset-hasła" element={<ResetPassword />} />
        <Route path="/zmiana-hasła" element={<ChangePassword />} />
      </Routes>
    </div>
  );
}

export default MainPageStore;