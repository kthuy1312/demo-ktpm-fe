import { useEffect, useState } from "react";
import { getProductById } from "../services/api.service";
import { useParams } from "react-router-dom";
import ProductInfor from "../components/detail-product/productInfo";


const DetailProductPage = () => {

    const { id } = useParams();
    const [productInfo, setProductInfo] = useState([])

    useEffect(() => {

        const fetchProductInfo = async () => {
            try {
                const res = await getProductById(id);
                setProductInfo(res.data);
            } catch (err) {
                console.error("Failed to fetch product:", err);
            }
        };

        if (id) fetchProductInfo();

    }, [id]);

    // console.log(productInfo)

    return (
        <>
            <ProductInfor productInfo={productInfo} />
        </>
    );
}

export default DetailProductPage