import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditFoodForm from './EditFoodForm'; // Make sure this import path is correct

function FoodList() {
    const [foods, setFoods] = useState([]);
    const [editFoodId, setEditFoodId] = useState(null); // ID of the food to edit

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const response = await axios.get('http://localhost:2000/food/listAll');
                setFoods(response.data);
            } catch (error) {
                console.error('Error fetching food items', error);
            }
        };

        fetchFoods();
    }, []);

    const handleUpdateFood = (updatedFood) => {
        setFoods(foods.map(food => food._id === updatedFood._id ? updatedFood : food));
        setEditFoodId(null); // Reset editing state
    };

    return (
        <div>
            <h2>Food Items</h2>
            <ul>
                {foods.map((food) => (
                    <li key={food._id}>
                        {editFoodId === food._id ? (
                            <EditFoodForm 
                                food={food} 
                                setEditFoodId={setEditFoodId} 
                                handleUpdateFood={handleUpdateFood} 
                            />
                        ) : (
                            <div>
                                {food.foodName} - {food.foodType} - {food.foodDesc} - ${food.foodPrice} - Allergens: {food.foodAllergens} - Status: {food.foodStatus}
                                <button onClick={() => setEditFoodId(food._id)}>Edit</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FoodList;
