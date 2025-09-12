
import axios from 'axios';
import './product.css'
const Product = (props) => {
    const products = props.products
    return (
        <div className="product-container">
            {products.map((item) => (
                <div key={item.id} className="product-card">
                    <img
                        src={`${import.meta.env.VITE_BACKEND_URL}/product/${item.image}`}
                        alt={item.name}
                        className="product-image"
                    />
                    <h3 className="product-name">{item.name}</h3>
                    <p className="product-category">{item.category?.name}</p>
                    <p className="product-price">{item.basePrice}$</p>
                    <button className="add-to-cart-button">Add to Cart</button>
                </div>
            ))}
        </div>

    );
}

export default Product;