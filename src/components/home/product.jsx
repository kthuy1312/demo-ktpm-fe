
import axios from 'axios';
import './product.css'
import { Pagination } from 'antd';
const Product = (props) => {
    const
        { products,
            page, setPage,
            pageSize,
            totalProduct } = props
    // console.log(props)

    const changePage = (pagination) => {
        if (pagination) {
            if (+pagination !== +page) {
                setPage(pagination)


                const target = document.querySelector('.product-section');
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    }

    return (
        <>
            <div className="product-section">
                <h3 className="product-section__title">ALL PRODUCTS</h3></div>
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

            <Pagination align="center"
                defaultPageSize={pageSize}
                defaultCurrent={page}
                total={totalProduct}
                onChange={changePage} />

        </>
    );
}

export default Product;