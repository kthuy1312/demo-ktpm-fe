import React, { useState } from 'react';
import { SearchOutlined, ShoppingOutlined } from '@ant-design/icons';
import { ConfigProvider, Menu } from 'antd';
import './header.css';

const items = [

    {
        label: 'MAC',
        key: 'mac',
        children: [

            {
                type: 'group',
                children: [
                    { label: 'Explore all Mac', key: 'all_mac' },
                    { label: 'Macbook Air', key: 'macbook_air' },
                    { label: 'Macbook Pro', key: 'macbook_pro' },
                    { label: 'iMac', key: 'imac' },
                    { label: 'Mac Mini', key: 'mac_mini' },
                ],
            },
        ],
    },
    {
        label: 'IPHONE',
        key: 'iphone',
        children: [

            {
                type: 'group',
                children: [
                    { label: 'Explore all Iphone', key: 'all_iphone' },
                    { label: 'Iphone 14', key: 'iphone_14' },
                    { label: 'Iphone 14 Pro', key: 'iphone_14_pro' },
                    { label: 'Iphone 13', key: 'iphone_13' },
                    { label: 'Iphone SE', key: 'iphone_se' },
                ],
            },
        ],
    },
    {
        label: 'IPAD',
        key: 'ipad',
        children: [

            {
                type: 'group',
                children: [
                    { label: 'Explore all Ipad', key: 'all_ipad' },
                    { label: 'Ipad Pro', key: 'ipad_pro' },
                    { label: 'Ipad Air', key: 'ipad_air' },
                    { label: 'Ipad Mini', key: 'ipad_mini' },
                ],
            },
        ],
    },
    {
        label: 'AIRPODS',
        key: 'airpods',
        children: [

            {
                type: 'group',
                children: [
                    { label: 'Explore all Airpods', key: 'all_airpods' },
                    { label: 'Airpods Max', key: 'airpods_max' },
                    { label: 'Airpods Pro', key: 'airpods_pro' },
                    { label: 'Airpods 2', key: 'airpods_2' },
                    { label: 'Airpods 3', key: 'airpods_3' },
                ],
            },
        ],
    },
    {
        key: 'search',
        icon: <SearchOutlined />,

    },
    {
        key: 'cart',
        icon: <ShoppingOutlined />,

    },

];


const Header = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <a href="/" >
                    <img src="/images/logo.png" alt="logo" style={{ height: 30, marginRight: 40 }} />
                </a>
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            </div>
        </ConfigProvider>

    );
}


export default Header;