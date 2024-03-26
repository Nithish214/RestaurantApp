import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditFoodForm({ food, setEditFoodId, handleUpdateFood }) {
    const [formData, setFormData] = useState({
        _id: '',
        foodName: '',
        foodType: '',
        foodDesc: '',
        foodPrice: '',
        foodAllergiens: '',
        foodStatus: '',
    });

    useEffect(() => {
        setFormData(food); // Initialize form data with food item
    }, [food]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Adjust the URL as per your API endpoint for updating a food item
            const response = await axios.post(`http://localhost:2000/food/editFood`, formData);
            handleUpdateFood(response.data); // Invoke callback to update the food list in parent component
            setEditFoodId(null);
          } catch (error) {
            console.error('Error updating food item:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Example form field for foodName */}
            <label>
                Food Name:
                <input name="foodName" value={formData.foodName} onChange={handleChange} required />
            </label>
            <label>
        Food Type:
        <input name="foodType" value={formData.foodType} onChange={handleChange} required />
      </label>
      <label>
        Description:
        <textarea name="foodDesc" value={formData.foodDesc} onChange={handleChange} required />
      </label>
      <label>
        Price:
        <input type="number" name="foodPrice" value={formData.foodPrice} onChange={handleChange} required />
      </label>
      <label>
        Allergens:
        <input name="foodAllergiens" value={formData.foodAllergiens} onChange={handleChange} />
      </label>
      <label>
        Status:
        <select name="foodStatus" value={formData.foodStatus} onChange={handleChange} required>
          <option value="">Select a status</option>
          <option value="Available">Available</option>
          <option value="Unavailable">Unavailable</option>
          <option value="Discontinued">Discontinued</option>
        </select>
      </label>
            {/* Add additional fields for foodType, foodDesc, etc., similarly */}
            <button type="submit">Save</button>
            <button type="button" onClick={() => setEditFoodId(null)}>Cancel</button>
        </form>
        
    );
}

export default EditFoodForm;
