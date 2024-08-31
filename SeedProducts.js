import React, { useState } from 'react';
import './SeedProducts.css';

const App = () => {
    // State to store the list of products
    const [products] = useState([
      
        { id: 1, name: 'Tomato Seeds', price: 2.99, imageUrl: 'https://img.freepik.com/premium-photo/wheat-background-hd-wallpaper-photographic-image_993236-3015.jpg' },
     
        { id: 2, name: 'Carrot Seeds', price: 1.99, imageUrl: 'https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-yellow-corn-plant-with-dark-background-image_2518503.jpg' },
        { id: 3, name: 'Corn', price: 3.99, imageUrl: 'https://wallpaperaccess.com/full/1463773.jpg' },
        { id: 4, name: 'Paddy', price: 3.99, imageUrl: 'https://img.freepik.com/free-photo/soybean-sauce-soybean-wooden-floor-soy-sauce-food-nutrition-concept_1150-26321.jpg' },
        { id: 5, name: 'Soya Bean', price: 3.99, imageUrl: 'https://t4.ftcdn.net/jpg/03/54/24/17/360_F_354241708_IrEvwS6AeMei4ZZJHTSOC1xqtl79rS10.jpg' },
        { id: 6, name: 'Tomato', price: 3.99, imageUrl: 'https://static.vecteezy.com/system/resources/previews/036/491/729/non_2x/ai-generated-summer-harvest-potatoes-freshly-picked-arranged-in-a-farmers-field-for-social-media-post-size-free-photo.jpg' },
        { id: 7, name: 'Potato', price: 3.99, imageUrl: 'https://c4.wallpaperflare.com/wallpaper/204/872/868/carrots-vegetables-harvest-wallpaper-preview.jpg' },
        { id: 8, name: 'Carrot', price: 3.99, imageUrl: 'https://c1.wallpaperflare.com/preview/768/968/969/lettuce-green-vegetables-greens.jpg' },
        { id: 9, name: 'Lettuce', price: 3.99, imageUrl: 'https://static.vecteezy.com/system/resources/previews/027/006/834/large_2x/ripe-red-strawberries-on-a-branch-in-the-garden-at-sunset-a-branch-with-natural-strawberries-on-a-blurred-background-of-a-strawberry-field-at-golden-hour-ai-generated-free-photo.jpg' },
        { id: 10, name: 'Strawberry', price: 3.99, imageUrl: 'https://img.freepik.com/premium-photo/banana-background-fruit-background-hd-8k-wallpaper-stock-photographic-image_890746-50314.jpg' },
        { id: 11, name: 'Cucumber Seeds', price: 3.99, imageUrl: 'https://wallpaperaccess.com/full/1463773.jpg' },
        { id: 12, name: 'Cucumber Seeds', price: 3.99, imageUrl: 'https://wallpaperaccess.com/full/1463773.jpg' },
        { id: 13, name: 'Cucumber Seeds', price: 3.99, imageUrl: 'https://wallpaperaccess.com/full/1463773.jpg' },
        
    ]);

    // Function to handle adding a product to the cart
    const addToCart = (product) => {
        console.log(`Added to cart: ${product.name}`);
        // Here you can also update the state or send the data to a backend
    };

    // SeedProducts component to render products
    const SeedProducts = ({ products, addToCart }) => {
        return (
            <div className="seed-products">
                {products.map(product => (
                    <div key={product.id} className="seed-product-card">
                        <img src={product.imageUrl} alt={product.name} className="product-image" />
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">${product.price}</p>
                        <button onClick={() => addToCart(product)} className="add-to-cart-button">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div>
            <h1>Seed Store</h1>
            <SeedProducts products={products} addToCart={addToCart} />
        </div>
    );
};

export default App;
