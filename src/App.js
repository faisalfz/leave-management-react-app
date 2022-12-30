import React from 'react';
import {Route, Routes} from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Wallchart from './pages/Wallchart';
import MyLeaves from './pages/MyLeaves';
import Submit from './pages/Submit';
import Error from './pages/Error';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/summary" element={<Home />} />
        <Route exact path="/wallchart" element={<Wallchart />} />
        <Route exact path="/myleaves" element={<MyLeaves />} />
        <Route exact path="/submit" element={<Submit />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
