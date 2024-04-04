import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddFoodForm from './components/AddFoodForm';
import FoodList from './components/FoodList';
import EditFoodForm from './components/EditFoodForm';
import LoginPage from './components/Login/Login';
import HomePage from './HomePage/HomePage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/Home" element={< HomePage/>} />
        <Route path="/" element={<FoodList />} />
        <Route path="/add-food" element={<AddFoodForm />} />
        <Route path="/edit-food" element={<EditFoodForm />} /> 
        <Route path="/login" element={<LoginPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
