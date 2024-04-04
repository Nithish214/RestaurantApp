import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditFoodForm from './EditFoodForm'; // Make sure this import path is correct
import styles from './css/FoodList.module.css';
function FoodList() {
    const [foods, setFoods] = useState([]);
    const [editFoodId, setEditFoodId] = useState(null); // ID of the food to edit
    const [forceUpdate, setForceUpdate] = useState(false);
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
        setFoods(currentFoods =>
            currentFoods.map(food => food._id === updatedFood._id ? updatedFood : food)
        );
        setEditFoodId(null); // Reset editing state
        setForceUpdate(f => !f); // Toggle to force re-render
    };

    return (
        <div className={styles.foodListContainer}>
          <h2 className={styles.foodListTitle}>Food Items</h2>
          <ul className={styles.foodList}>
            {foods.map((food) => (
              <li key={food._id} className={styles.foodItem}>
                {editFoodId === food._id ? (
                  <EditFoodForm 
                    food={food} 
                    setEditFoodId={setEditFoodId} 
                    handleUpdateFood={handleUpdateFood} 
                  />
                ) : (
                  <div className={styles.foodDetails}>
                    <span className={styles.foodName}>{food.foodName}</span>
                    <span>{food.foodType}</span>
                    <span>{food.foodDesc}</span>
                    <span>${food.foodPrice}</span>
                    <span>Allergens: {food.foodAllergens}</span>
                    <span>Status: {food.foodStatus}</span>
                    <button 
                      className={styles.editButton} 
                      onClick={() => setEditFoodId(food._id)}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    export default FoodList;