import { useEffect, useState } from "react";
import { getProductById, getReview, postReview } from "../services/api.service";
import { useParams } from "react-router-dom";
import ProductInfor from "../components/detail-product/productInfo";
import Review from "../components/detail-product/review";


const DetailProductPage = () => {

    const { id } = useParams();
    const [productInfo, setProductInfo] = useState([])

    //review
    const [reviews, setReviews] = useState([])
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");


    useEffect(() => {
        if (id) {
            fetchProductInfo()
            fetchReview()
        };
    }, [id]);

    const fetchProductInfo = async () => {
        try {
            const res = await getProductById(id);
            setProductInfo(res.data);
        } catch (err) {
            console.error("Failed to fetch product:", err);
        }
    };
    const fetchReview = async () => {
        try {
            const res = await getReview(id);
            setReviews(res.data);
        } catch (err) {
            console.error("Failed to fetch review:", err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await postReview(id, rating, comment)
            setReviews((prev) => [...prev, res.reviewData]); // thêm review mới vào list
            setRating(0);
            setComment("");
        } catch (err) {
            console.error("Failed to submit review:", err);
        }
    };

    // console.log(reviews)

    return (
        <>
            <ProductInfor productInfo={productInfo} />
            <Review
                reviews={reviews}
                rating={rating} setRating={setRating}
                comment={comment} setComment={setComment}
                handleSubmit={handleSubmit}
            />
        </>
    );
}

export default DetailProductPage