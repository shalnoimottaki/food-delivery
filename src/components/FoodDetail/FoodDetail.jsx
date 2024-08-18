import React from 'react';
import './FoodDetail.css';
import { assets } from '../../assets/assets';

const FoodDetail = ({ id, name, description, price, image, onClose }) => {
    return (
        <div className='food-detail'>
            <h1 className='food-detail-title'>Food Detail</h1>
            <a className='food-detail-close' onClick={onClose}> <img src={assets.cross_icon} alt="Close" /> </a>
            <img className='food-detail-image' src={image} alt={name} />
            <h2>{name}</h2>
            <div className='food-detail-info'>
                <p className='desc'>{description}</p>
                <p className='price'>${price}</p>
            </div>
        </div>
    );
};

export default FoodDetail;
