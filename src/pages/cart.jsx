import { useState } from 'react';
import CartItem from '../components/cart/cartItem';
import CartSummary from '../components/cart/cartSummary';
import CartHeader from '../components/cart/cartHeader';

const initialItems = [
    {
        id: 1,
        name: 'iPhone 15 Pro',
        variant: 'Blue Titanium · 256GB',
        price: 1199,
        image: 'https://images.unsplash.com/photo-1696446705833-e3a7d5c00f39?auto=format&fit=crop&w=400&q=80',
        quantity: 1,
    },
    {
        id: 2,
        name: 'MacBook Air M3',
        variant: 'Midnight · 16GB · 512GB SSD',
        price: 1899,
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
        quantity: 1,
    },
    {
        id: 3,
        name: 'AirPods Pro (2nd generation)',
        variant: 'MagSafe Charging Case (USB‑C)',
        price: 249,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80',
        quantity: 2,
    },
];

const CartPage = () => {
    const [items, setItems] = useState(initialItems);
    return (
        <div className="cart-page" style={{
            maxWidth: "1200px",
            margin: "40px auto 80px",
            padding: "0 20px",
        }}>
            <CartHeader />

            <div className="cart-layout" style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 2.2fr) minmax(280px, 1fr)",
                gap: "24px",
                alignItems: "start"
            }}>
                <CartItem items={items} setItems={setItems} />

                <CartSummary items={items} setItems={setItems} />
            </div>
        </div>
    );
};

export default CartPage;
