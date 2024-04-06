import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/Login/AuthContext'; 
import ProtectedRoute from './components/Login/ProtectedRoute';
import AddFoodForm from './components/AddFoodForm';
import FoodList from './components/FoodList';
import EditFoodForm from './components/EditFoodForm';
import LoginPage from './components/Login/Login';
import HomePage from './HomePage/HomePage';
// import NotFound from './components/NotFound'; 


function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/food" element={
            <ProtectedRoute>
              <FoodList />
            </ProtectedRoute>
          } />
             <Route path="/add-food" element={
            <ProtectedRoute>
              <AddFoodForm />
            </ProtectedRoute>
          } />
           <Route path="/edit-food/:id" element={
            <ProtectedRoute>
              <EditFoodForm />
            </ProtectedRoute>
          } />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="*" element={<NotFound />} /> Handle unmatched routes */}
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;