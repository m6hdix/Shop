// Import axios library to make HTTP requests
import axios from 'axios';

// Set Base URL for the API endpoint
const BASE_URL = 'https://fakestoreapi.com/products'

// Declare an async function that will fetch products from API endpoint
export async function GetProducts() {
    // Call the GET method of axios object by supplying the base url
    const resbonse= await axios.get(BASE_URL)
    // Return the data obtained from the response object
    return resbonse.data
}
