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

export {
    getAllProduct, getProductPagination, getAllCategory
}