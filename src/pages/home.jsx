import { useEffect, useState } from "react";
import Banner from "../components/home/banner";
import Product from "../components/home/product";
import { getProduct, getProductPagination } from "../services/api.service";


const Home = () => {

    const [products, setProducts] = useState([]);


    //pagination 
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);
    const [totalPages, setTotalPages] = useState(0);
    const [totalProduct, setTotalProduct] = useState(0);

    useEffect(() => {
        // fetchProducts();
        fetchPagination()
    }, [page]);

    // const fetchProducts = async () => {
    //     const response = await getProduct();
    //     setProducts(response.data);
    // };

    const fetchPagination = async () => {
        const response = await getProductPagination(page, pageSize);
        setProducts(response.data);
        setPage(response.meta.current);
        setPageSize(response.meta.pageSize);
        setTotalPages(response.meta.current);
        setTotalProduct(response.meta.totalProduct);
    }

    return (
        <>
            <Banner />
            <Product
                products={products}
                page={page} setPage={setPage}
                pageSize={pageSize} setPageSize={setPageSize}
                totalPages={totalPages} setTotalPages={setTotalPages}
                totalProduct={totalProduct} setTotalProduct={setTotalProduct}
            />

        </>
    )
}

export default Home;    