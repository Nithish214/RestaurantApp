import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddFoodForm from './components/AddFoodForm';
import FoodList from './components/FoodList';
import EditFoodForm from './components/EditFoodForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FoodList />} />
        <Route path="/add-food" element={<AddFoodForm />} />
        <Route path="/edit-food" element={<EditFoodForm />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
