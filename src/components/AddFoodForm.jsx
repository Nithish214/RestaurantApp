import React, { useState } from 'react';
import axios from 'axios';
import './css/AddFoodForm.css';
const AddFoodForm = () => {
    const [foodName, setFoodName] = useState('');
    const [foodType, setFoodType] = useState('');
    const [foodDesc, setFoodDesc] = useState('');
    const [foodPrice, setFoodPrice] = useState(0);
    const [foodAllergens, setFoodAllergens] = useState([]);
    const [foodStatus, setFoodStatus] = useState('ert');

    const allergenOptions = ['Peanuts', 'Tree nuts', 'Milk', 'Egg', 'Wheat', 'Soy', 'Fish', 'Shellfish'];
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:2000/food/addFood', { 
                foodName, 
                foodType, 
                foodDesc, 
                foodPrice: Number(foodPrice), 
                foodAllergiens: foodAllergens,
                foodStatus 
            });
            // Reset form or provide user feedback
            alert('Food added successfully!');
            // Resetting the form fields
            setFoodName('');
            setFoodType('');
            setFoodDesc('');
            setFoodPrice(0);
            setFoodAllergens('');
            setFoodStatus('');
        } catch (error) {
            console.error("Error adding food", error);
            // Provide user feedback
            alert('Failed to add food.');
        }
    };
    const handleAllergenChange = (event) => {
        const values = Array.from(event.target.selectedOptions, option => option.value);
        setFoodAllergens(values);
    };
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '500px' }}>
                <h2 style={{ textAlign: 'center' }}>Add New Food Item</h2>
                <div className="form-group">
                    <label htmlFor="foodName">Food Name:</label>
                    <input id="foodName" type="text" value={foodName} onChange={(e) => setFoodName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="foodType">Food Type:</label>
                    <input id="foodType" type="text" value={foodType} onChange={(e) => setFoodType(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="foodDesc">Description:</label>
                    <input id="foodDesc" type="text" value={foodDesc} onChange={(e) => setFoodDesc(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="foodPrice">Price:</label>
                    <input id="foodPrice" type="number" value={foodPrice} onChange={(e) => setFoodPrice(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="foodAllergens">Allergens: <select multiple value={foodAllergens} onChange={handleAllergenChange}>
                    {allergenOptions.map(allergen => (
                        <option key={allergen} value={allergen}>
                            {allergen}
                        </option>
                    ))}
                </select></label>
                    <input id="foodAllergens" type="text" value={foodAllergens} onChange={(e) => setFoodAllergens(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="foodStatus">Status:</label>
                    <select id="foodStatus" value={foodStatus} onChange={(e) => setFoodStatus(e.target.value)} required>
                        <option value="sale">Sale</option>
                        <option value="not for sale">Not for Sale</option>
                    </select>
                </div>
                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Add Food
                </button>
            </form>
        </div>
    );
};
export default AddFoodForm;