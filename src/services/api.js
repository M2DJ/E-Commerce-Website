const BASE_URL = 'https://fakestoreapi.com';

export const getProducts = async() =>{
    const res = await fetch(`${BASE_URL}/products`);
    const data = res.json();
    return data;
}