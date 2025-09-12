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
const getProduct = () => {
    const URL_BACKEND = `/api/products`;
    return axios.get(URL_BACKEND);
}



export {
    getProduct
}