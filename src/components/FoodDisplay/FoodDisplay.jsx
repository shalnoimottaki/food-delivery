import React, { useContext, useState } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import FoodDetail from '../FoodDetail/FoodDetail';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);
    const [selectedFood, setSelectedFood] = useState(null);

    const handleViewFood = (id) => {
        const food = food_list.find(item => item._id === id);
        setSelectedFood(food);
    };

    const handleCloseFoodDetail = () => {
        setSelectedFood(null);
    };

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near to you</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return (
                            <FoodItem
                                key={index}
                                id={item._id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                                onViewFood={handleViewFood}
                            />
                        );
                    }
                    return null;
                })}
            </div>
            {selectedFood && (
                <div className='food-detail-overlay'>
                    <FoodDetail
                        id={selectedFood._id}
                        name={selectedFood.name}
                        description={selectedFood.description}
                        price={selectedFood.price}
                        image={selectedFood.image}
                        onClose={handleCloseFoodDetail}
                    />
                </div>
            )}
        </div>
    );
};

export default FoodDisplay;