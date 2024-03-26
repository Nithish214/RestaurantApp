import React, { useState } from 'react';
import axios from 'axios';

const AddFoodForm = () => {
    const [foodName, setFoodName] = useState('');
    const [foodType, setFoodType] = useState('');
    const [foodDesc, setFoodDesc] = useState('');
    const [foodPrice, setFoodPrice] = useState(0);
    const [foodAllergens, setFoodAllergens] = useState('');
    const [foodStatus, setFoodStatus] = useState('ert');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:2000/food/addFood', { 
                foodName, 
                foodType, 
                foodDesc, 
                foodPrice, 
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

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Food Name:
                <input type="text" value={foodName} onChange={(e) => setFoodName(e.target.value)} />
            </label>
            <label>
                Food Type:
                <input type="text" value={foodType} onChange={(e) => setFoodType(e.target.value)} />
            </label>
            <label>
                Description:
                <input type="text" value={foodDesc} onChange={(e) => setFoodDesc(e.target.value)} />
            </label>
            <label>
                Price:
                <input type="number" value={foodPrice} onChange={(e) => setFoodPrice(e.target.value)} />
            </label>
            <label>
                Allergens:
                <input type="text" value={foodAllergens} onChange={(e) => setFoodAllergens(e.target.value)} />
            </label>
            <label>
                Status:
                <select value={foodStatus} onChange={(e) => setFoodStatus(e.target.value)}>
                    <option value="sale">Sale</option>
                    <option value="not for sale">Not for Sale</option>
                </select>
            </label>
            <button type="submit">Add Food</button>
        </form>
    );
};

export default AddFoodForm;
