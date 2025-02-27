
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL; // ✅ API URL সঠিকভাবে সেট করা

export const getServices = async () => {
  try {
    const res = await axios.get(`${API_URL}/services/api/get-all`);
    return res.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};

export const getServicesDetails = async (id: string) => {
  try {
    const res = await axios.get(`${API_URL}/services/api/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching service details for ID ${id}:`, error);
    return null;
  }
};

export const getProductDetails = async (id: string) => {
  try {
    const res = await axios.get(`${API_URL}/products/api/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching product details for ID ${id}:`, error);
    return null;
  }
};

export const getReviews = async () => {
  try {
    const res = await axios.get(`${API_URL}/review/api/get-all`);
    return res.data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
};
