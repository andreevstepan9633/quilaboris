// Importing necessary modules
import axios from 'axios';

// Defining a type for User to ensure type safety
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

// Function to fetch users from the API
const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>('https://www.example.com    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching data:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    return [];
  }
};

// Example usage of fetchUsers function
const displayUsers = async () => {
  const users = await fetchUsers();
  console.log(users);
};

displayUsers();
