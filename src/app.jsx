import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home.jsx';
import {Blog, BlogList} from './blog.jsx';
import Me from './me.jsx';
import Layout from './layout.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/blog/" element={<BlogList />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/me" element={<Me/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
