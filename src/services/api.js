const BASE_URL = 'https://fakestoreapi.in/api';

export const getProducts = async() =>{
    const res = await fetch(`${BASE_URL}/products`);
    const data = res.json();
    return data;
}