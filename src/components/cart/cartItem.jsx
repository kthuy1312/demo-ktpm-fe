import { useNavigate } from 'react-router-dom';
import './cart.css'

import { MinusOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';

const CartItem = (props) => {

    const { items, setItems } = props;
    const navigate = useNavigate();

    const updateQuantity = (id, delta) => {
        setItems(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const removeItem = id => {
        setItems(prev => prev.filter(item => item.id !== id));
    };
    return (
        <>
            <section className="cart-items">
                {items.length === 0 ? (
                    <div className="cart-empty">
                        <h3>Your cart is empty</h3>
                        <p>Add some products from the store to get started.</p>
                        <button className="cart-empty__cta" onClick={() => navigate('/')}>
                            Continue shopping
                        </button>
                    </div>
                ) : (
                    items.map(item => (
                        <article className="cart-item" key={item.id}>
                            <img src={item.image} alt={item.name} className="cart-item__image" />

                            <div className="cart-item__content">
                                <div className="cart-item__info">
                                    <h3 className="cart-item__name">{item.name}</h3>
                                    <p className="cart-item__variant">{item.variant}</p>
                                </div>

                                <div className="cart-item__actions">
                                    <div className="cart-quantity">
                                        <button
                                            className="cart-quantity__btn"
                                            onClick={() => updateQuantity(item.id, -1)}
                                            aria-label="Decrease quantity"
                                        >
                                            <MinusOutlined />
                                        </button>
                                        <span className="cart-quantity__value">{item.quantity}</span>
                                        <button
                                            className="cart-quantity__btn"
                                            onClick={() => updateQuantity(item.id, 1)}
                                            aria-label="Increase quantity"
                                        >
                                            <PlusOutlined />
                                        </button>
                                    </div>
                                    <p className="cart-item__price">${(item.price * item.quantity).toLocaleString()}</p>
                                    <button className="cart-remove" onClick={() => removeItem(item.id)}>
                                        <DeleteOutlined />
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))
                )}
            </section>
        </>
    )
}

export default CartItem;