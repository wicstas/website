import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home.jsx';
import {Blog, BlogList} from './blog.jsx';
import About from './about.jsx';
import Layout from './layout.jsx';

import 'katex/dist/katex.min.css';

function App() {
    const [blogIndex, setBlogIndex] = useState(-1);
  
  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/blog/" element={<BlogList />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/about" element={<About/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
