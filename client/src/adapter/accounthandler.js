import axios from 'axios';

// Create and return an Axios instance
const apiAuth = axios.create({
  baseURL: 'http://localhost:3001/api/auth',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-token'
  }
});

// Define API functions
const registerUser = async (data) => {

  try {
    const response = await apiAuth.post('/register', data);

    return {
      result: "success",
      data: response.data.data,
      info: [{ message: response.data.message, type: 'success' }]
    }
  } catch (error) {
    if (error.response.data.errors) {
      // return array of error
      return {
        result: "failed",
        data: "",
        info: (error.response.data.errors.map(err => ({ message: err.msg, type: 'error' })))
      }

    } else {
      return {
        result: "failed",
        data: "",
        info: [{ message: 'Unexpected error occurred', type: 'error' }]
      }
    }
  }

};

const loginUser = async (data) => {

  try {
    const response = await apiAuth.post('/login', data);
    return {
      result: "success",
      data: response.data.data,
      info: [{ message: response.data.message, type: 'success' }]
    }
  } catch (error) {
    if (error.response.data.errors) {
      // return array of error
      return {
        result: "failed",
        data: "",
        info: (error.response.data.errors.map(err => ({ message: err.msg, type: 'error' })))
      }
    } else {
      return {
        result: "failed",
        data: "",
        info: [{ message: 'Unexpected error occurred', type: 'error' }]
      }
    }
  }
}

// Export an object containing all functions
export default {
  registerUser, loginUser
};
