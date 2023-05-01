import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// router 경로들 import
import Main from 'pages/Main';
import Login from 'pages/Login';
import Compose from 'pages/Compose';
import Relay from 'pages/Relay';
import Mypage from 'pages/Mypage';
import Albums from 'pages/Albums';
import Header from 'components/organisms/common/Header';
import MainLayout from 'pages/MainLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/albums" element={<Albums />} />
          </Route>
          <Route path="/compose" element={<Compose />} />
          <Route path="/relay" element={<Relay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
