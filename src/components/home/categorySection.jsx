import "./categorySection.css";
import { Divider } from "antd";

const CategorySection = (props) => {
    const { category, products } = props
    // console.log(props)
    return (
        <>
            <Divider />

            <div className="category-section">
                <div className="category-header">
                    <h2 className="category-title">{category.name}</h2>
                    <a href="#" className="see-more">
                        Xem thêm
                    </a>

                </div>

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
            </div >
        </>
    );
};

export default CategorySection;
