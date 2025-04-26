import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home.jsx';
import { JournalEntry, Journal } from './journal.jsx';
import Me from './me.jsx';
import Layout from './layout.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/journal/" element={<JournalEntry />} />
          <Route path="journal/:slug" element={<Journal />} />
          <Route path="/me" element={<Me />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
