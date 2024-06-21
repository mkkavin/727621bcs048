import axios from 'axios';

const baseURL = 'http://20.244.56.144/test'; // Replace with actual base URL

const api = axios.create({
  baseURL,
});

export const getTopProducts = async (company, category, top, minPrice, maxPrice) => {
  try {
    const response = await api.get(`/companies/${company}/categories/${category}/products`, {
      params: {
        top,
        minPrice,
        maxPrice,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching top products:', error);
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await api.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product ${productId}:`, error);
    throw error;
  }
};
