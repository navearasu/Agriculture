import React, { useState } from 'react';
import './FertilizerProducts.css'; // Make sure this CSS file is created as described

const App = () => {
    // State to store the list of fertilizers
    const [fertilizers] = useState([
        { id: 1, name: 'Nitrogen Fertilizer', price: 15.99, imageUrl: 'https://img.freepik.com/premium-photo/fertilizer-in-a-bag-on-the-field_100454-3165.jpg' },
        { id: 2, name: 'Phosphorus Fertilizer', price: 12.99, imageUrl: 'https://img.freepik.com/premium-photo/bags-fertilizers-farmers-market_255472-2942.jpg' },
        { id: 3, name: 'Potassium Fertilizer', price: 17.99, imageUrl: 'https://img.freepik.com/premium-photo/organic-fertilizer-compost-pile-field_1028-4621.jpg' },
        { id: 4, name: 'Calcium Fertilizer', price: 14.99, imageUrl: 'https://img.freepik.com/premium-photo/sugarcane-field-man-hand-fertilizer_341646-1178.jpg' },
        { id: 5, name: 'Magnesium Fertilizer', price: 18.99, imageUrl: 'https://img.freepik.com/premium-photo/fertilizer-particles_299846-164.jpg' },
        { id: 6, name: 'Sulfur Fertilizer', price: 16.99, imageUrl: 'https://img.freepik.com/premium-photo/worker-fertilizer-spray-pesticides_149478-3943.jpg' },
        { id: 7, name: 'Organic Fertilizer', price: 20.99, imageUrl: 'https://img.freepik.com/premium-photo/fertilizer-farm-bag_116170-7247.jpg' },
        { id: 8, name: 'Liquid Fertilizer', price: 22.99, imageUrl: 'https://img.freepik.com/premium-photo/tractor-fertilizing-field_438906-1351.jpg' }
    ]);

    // Function to handle adding a product to the cart
    const addToCart = (fertilizer) => {
        console.log(`Added to cart: ${fertilizer.name}`);
        // Here you can also update the state or send the data to a backend
    };

    // FertilizerProducts component to render fertilizers
    const FertilizerProducts = ({ fertilizers, addToCart }) => {
        return (
            <div className="fertilizer-products">
                {fertilizers.map(fertilizer => (
                    <div key={fertilizer.id} className="fertilizer-product-card">
                        <img src={fertilizer.imageUrl} alt={fertilizer.name} className="product-image" />
                        <h3 className="product-name">{fertilizer.name}</h3>
                        <p className="product-price">${fertilizer.price}</p>
                        <button onClick={() => addToCart(fertilizer)} className="add-to-cart-button">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div>
            <h1>Fertilizer Store</h1>
            <FertilizerProducts fertilizers={fertilizers} addToCart={addToCart} />
        </div>
    );
};

export default App;
