import { useState } from 'react';
import { SearchOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { ConfigProvider, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState('');

    const onClick = (e) => {
        setCurrent(e.key);
        // điều hướng cơ bản
        if (e.key === 'cart') navigate('/cart');
        if (e.key === 'login') navigate('/login');
        if (e.key === 'profile') navigate('/profile');
    };

    const items = [
        {
            key: 'mac',
            label: 'MAC',
            children: [
                { label: 'Explore all Mac', key: 'all_mac' },
                { label: 'Macbook Air', key: 'macbook_air' },
                { label: 'Macbook Pro', key: 'macbook_pro' },
                { label: 'iMac', key: 'imac' },
                { label: 'Mac Mini', key: 'mac_mini' },
            ],
        },
        {
            key: 'iphone',
            label: 'IPHONE',
            children: [
                { label: 'Explore all Iphone', key: 'all_iphone' },
                { label: 'Iphone 14', key: 'iphone_14' },
                { label: 'Iphone 14 Pro', key: 'iphone_14_pro' },
                { label: 'Iphone 13', key: 'iphone_13' },
                { label: 'Iphone SE', key: 'iphone_se' },
            ],
        },
        {
            key: 'ipad',
            label: 'IPAD',
            children: [
                { label: 'Explore all Ipad', key: 'all_ipad' },
                { label: 'Ipad Pro', key: 'ipad_pro' },
                { label: 'Ipad Air', key: 'ipad_air' },
                { label: 'Ipad Mini', key: 'ipad_mini' },
            ],
        },
        {
            key: 'airpods',
            label: 'AIRPODS',
            children: [
                { label: 'Explore all Airpods', key: 'all_airpods' },
                { label: 'Airpods Max', key: 'airpods_max' },
                { label: 'Airpods Pro', key: 'airpods_pro' },
                { label: 'Airpods 2', key: 'airpods_2' },
                { label: 'Airpods 3', key: 'airpods_3' },
            ],
        },
        { type: 'divider' },
        { key: 'profile', icon: <UserOutlined />, label: 'Profile' },
        { key: 'login', label: 'Sign in' },
        { key: 'cart', icon: <ShoppingOutlined />, label: 'Cart' },
        { key: 'search', icon: <SearchOutlined />, label: 'Search' },
    ];

    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        itemSelectedColor: 'black',
                        itemHoverColor: 'black',
                        horizontalItemSelectedColor: 'black',
                        horizontalItemBorderColor: 'black',
                    },
                },
            }}
        >
            <div className="header-sticky">
                <div className="header-container">
                    <a href="/">
                        <img src="/images/logo.png" alt="logo" className="header-logo" />
                    </a>
                    <Menu
                        onClick={onClick}
                        selectedKeys={current ? [current] : []}
                        mode="horizontal"
                        items={items}
                        className="header-menu"
                    />
                </div>
            </div>
        </ConfigProvider>
    );
};

export default Header;
