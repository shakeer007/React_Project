const BASE_URL = 'https://dummyjson.com';

export const endpoints = {
  users: `${BASE_URL}/users`,
  products: `${BASE_URL}/products`,
  carts: `${BASE_URL}/carts`,
  posts: `${BASE_URL}/posts`,
  recipes: `${BASE_URL}/recipes`,
};

export const fetchData = async (type) => {
  const url = endpoints[type];
  if (!url) throw new Error('Invalid data type');

  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch ${type}`);
  const data = await response.json();

  switch (type) {
    case 'users': return data.users;
    case 'products': return data.products;
    case 'carts': return data.carts;
    case 'posts': return data.posts;
    case 'recipes': return data.recipes;
    default: return [];
  }
};