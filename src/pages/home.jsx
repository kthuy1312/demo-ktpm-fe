import { useEffect, useState } from "react";
import Banner from "../components/home/banner";
import Product from "../components/home/product";
import { getAllCategory, getAllProduct, getProductPagination } from "../services/api.service";
import CategorySection from "../components/home/categorySection";
import { Spin } from "antd";


const Home = () => {

    const [products, setProducts] = useState([]);  //spam theo pagination
    const [allProducts, setAllProducts] = useState([]); //dùng cho category ở home
    const [categories, setCategory] = useState([]);


    //pagination 
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);
    const [totalPages, setTotalPages] = useState(0);
    const [totalProduct, setTotalProduct] = useState(0);


    // loading
    const [isAppLoading, setIsAppLoading] = useState(true);

    useEffect(() => {
        setIsAppLoading(true);

        Promise.all([
            fetchProducts(),
            fetchPagination(),
            fetchCategories()
        ]).finally(() => {
            setIsAppLoading(false);
        });

    }, [page]);




    const fetchPagination = async () => {
        const response = await getProductPagination(page, pageSize);
        setProducts(response.data);
        setPage(response.meta.current);
        setPageSize(response.meta.pageSize);
        setTotalPages(response.meta.current);
        setTotalProduct(response.meta.totalProduct);
    }

    const fetchCategories = async () => {
        const response = await getAllCategory();
        setCategory(response.data);
    };

    const fetchProducts = async () => {
        const response = await getAllProduct();
        setAllProducts(response.data);
    };

    return (
        <>
            <Banner />

            {isAppLoading ? (
                <div style={{ textAlign: "center", margin: "50px 0" }}>
                    <Spin size="large" />
                </div>
            ) : (

                <>
                    <Product
                        products={products}
                        page={page} setPage={setPage}
                        pageSize={pageSize} setPageSize={setPageSize}
                        totalPages={totalPages} setTotalPages={setTotalPages}
                        totalProduct={totalProduct} setTotalProduct={setTotalProduct}
                    />

                    {categories.map((cat) => {
                        const productByCategory = allProducts.filter(
                            (product) => product.category_id === cat.category_id
                        );

                        if (productByCategory.length === 0) return null;

                        return (
                            <CategorySection
                                key={cat.category_id}
                                category={cat}
                                products={productByCategory.slice(0, 4)}
                            />
                        );
                    })}
                </>
            )}
        </>
    );


}

export default Home;    