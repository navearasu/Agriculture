import React, { useState } from 'react';
import './CartPage.css';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Corn', quantity: 1, price: 44.00, imageUrl: 'https://wallpaperaccess.com/full/1463773.jpg' },
        { id: 2, name: 'Cumcumber', quantity: 1, price: 25.00, imageUrl: 'https://wallpaperaccess.com/full/1463773.jpg' },
        { id: 3, name: 'Carrot', quantity: 1, price: 80.00, imageUrl: 'https://c1.wallpaperflare.com/preview/768/968/969/lettuce-green-vegetables-greens.jpg' },
        { id: 2, name: 'Potato', quantity: 1, price: 65.00, imageUrl: 'https://c4.wallpaperflare.com/wallpaper/204/872/868/carrots-vegetables-harvest-wallpaper-preview.jpg' }
        
    ]);

    const handleQuantityChange = (id, delta) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + delta } : item
        ));
    };

    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <div className="cart-items">
                <h2>Shopping Cart</h2>
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.imageUrl} alt={item.name} className="item-image" />
                        <div className="item-details">
                            <h4>{item.name}</h4>
                            <div className="item-quantity">
                                <button onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity === 1}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                            </div>
                            <div className="item-price">
                                <span>€ {item.price.toFixed(2)}</span>
                            </div>
                        </div>
                        <button className="remove-item" onClick={() => handleRemoveItem(item.id)}>×</button>
                    </div>
                ))}
                <a href="/shop" className="back-to-shop">← Back to shop</a>
            </div>
            <div className="cart-summary">
                <h3>Summary</h3>
                <div className="summary-item">
                    <span>ITEMS {totalItems}</span>
                    <span>€ {totalPrice.toFixed(2)}</span>
                </div>
                <div className="summary-item">
                    <span>SHIPPING</span>
                    <select>
                        <option value="5">Standard-Delivery - €5.00</option>
                        <option value="10">Express-Delivery - €10.00</option>
                    </select>
                </div>
                <div className="summary-item">
                    <span>GIVE CODE</span>
                    <input type="text" placeholder="Enter your code" />
                </div>
                <div className="summary-total">
                    <span>TOTAL PRICE</span>
                    <span>€ {(totalPrice + 5).toFixed(2)}</span>
                </div>
                <button className="checkout-button">CHECKOUT</button>
            </div>
        </div>
    );
};

export default CartPage;
