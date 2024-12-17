// src/services/api.ts
import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Your backend API URL

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const addToCart = async (productId: number, userId: number) => {
  try {
    const response = await axios.post(`${API_URL}/cart`, { productId, userId });
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};
