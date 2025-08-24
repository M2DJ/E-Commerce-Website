const BASE_URL = 'https://api.escuelajs.co/api/v1';

export const getProducts = async() =>{
    const res = await fetch(`${BASE_URL}/products`);
    const data = res.json();
    return data;
}

export const getCategories = async(id) => {
    const res = await fetch(`${BASE_URL}/categories/${id}/products`);
    const data = res.json();
    return data;
}

export const checkCategories = async() => {
    const res = await fetch(`${BASE_URL}/categories`);
    const data = res.json();
    return data;
}