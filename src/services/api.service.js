// import axios from "axios";
import axios from './axios.customize';


// const updateBookAPI = (_id, thumbnail, mainText, author, price, quantity, category) => {
//     const URL_BACKEND = `/api/v1/book`;
//     const data = {
//         _id: _id,
//         thumbnail: thumbnail,
//         mainText: mainText,
//         author: author,
//         price: price,
//         quantity: quantity,
//         category: category
//     }
//     return axios.put(URL_BACKEND, data);
// }


//product
const getAllProduct = () => {
    const URL_BACKEND = `/api/products`;
    return axios.get(URL_BACKEND);
}
const getProductPagination = (page, pageSize) => {
    const URL_BACKEND = `/api/product?page=${page}&pageSize=${pageSize}`;
    return axios.get(URL_BACKEND);
}

const getAllCategory = () => {
    const URL_BACKEND = `/api/category`;
    return axios.get(URL_BACKEND);
}
const getProductById = (id) => {
    const URL_BACKEND = `/api/product/${id}`;
    return axios.get(URL_BACKEND);
}

//review
const getReview = (productId) => {
    const URL_BACKEND = `/api/review/${productId}`;
    return axios.get(URL_BACKEND);
}
const postReview = (productId, rating, comment) => {
    const URL_BACKEND = `/api/review`;
    const data = { productId, rating, comment }
    return axios.post(URL_BACKEND, data);
}

export {
    getAllProduct, getProductPagination, getAllCategory, getProductById, getReview, postReview
}