import { useState } from "react";
import './productInfor.css';
import { Divider } from "antd";

const ProductInfor = ({ productInfo }) => {

    if (!productInfo || !productInfo.variants) return null;

    //luu color vào 1 set
    const colors = [...new Set(productInfo.variants.map(v => v.color))];
    const [selectedColor, setSelectedColor] = useState(colors[0] || "");

    //luu storages 
    const storages = productInfo.variants
        .filter(v => v.color === selectedColor)
        .map(v => v.storage);
    const [selectedStorage, setSelectedStorage] = useState(storages[0] || "");


    const selectedVariant = productInfo.variants.find(
        v => v.color === selectedColor && v.storage === selectedStorage
    );
    // console.log(selectedVariant)

    const handleAddToCart = () => {
        console.log("Add to cart:", {
            productId: productInfo.id,
            variantId: selectedVariant.id,
            color: selectedColor,
            storage: selectedStorage,
            price: selectedVariant.price
        });
        alert(`Added to cart: ${productInfo.name} - ${selectedColor} - ${selectedStorage} - $${selectedVariant.price}`);
    }

    return (
        <div className="pi-wrapper">
            <div className="pi-top">
                <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/product/${productInfo.image}`}
                    alt={productInfo.name}
                    className="pi-image"
                />
                <div className="pi-details">
                    <h1 className="pi-title">{productInfo.name}</h1>
                    <p className="pi-category">{productInfo.category?.name ?? "Unknown category"}</p>
                    <p className="pi-price">{selectedVariant.price}$</p>

                    {/* Chọn màu */}
                    <div className="pi-colors">
                        <span>Color: </span>
                        {colors.map(color => (
                            <span
                                key={color}
                                className={`pi-color-dot ${selectedColor === color ? "selected" : ""}`}
                                style={{ backgroundColor: color }}
                                title={color}
                                onClick={() => {
                                    setSelectedColor(color);
                                    // khi đổi màu, chọn storage đầu tiên tương ứng màu mới
                                    const firstStorage = productInfo.variants.find(v => v.color === color)?.storage;
                                    setSelectedStorage(firstStorage);
                                }}
                            />
                        ))}
                    </div>

                    {/* Chọn dung lượng */}
                    <div className="pi-capacities">
                        <span>Storage: </span>
                        {storages.map(storage => (
                            <button
                                key={storage}
                                className={`pi-capacity-btn ${selectedStorage === storage ? "selected" : ""}`}
                                onClick={() => setSelectedStorage(storage)}
                            >
                                {storage}
                            </button>
                        ))}
                    </div>

                    <button className="pi-add-btn" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
            <Divider />

            <div className="pi-description">
                <h3>Product Description</h3>
                <p>{productInfo.description ?? "Chưa có mô tả sản phẩm."}</p>
            </div>
        </div>
    );
}

export default ProductInfor;
