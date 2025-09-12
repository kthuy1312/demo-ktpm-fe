import { useEffect, useState } from "react";
import Banner from "../components/home/banner";
import Product from "../components/home/product";
import { getProduct } from "../services/api.service";


const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await getProduct();
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    return (
        <>
            <Banner />
            <Product products={products} />
        </>
    )
}

export default Home;    