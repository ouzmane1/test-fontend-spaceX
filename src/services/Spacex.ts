import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v5/launches';

// Récupération du prochain lancement
export const getNextLaunch = async () => {
    const response = await axios.get(`${API_URL}/next`);
    return response.data;
};

// Récupération des 10 derniers lancements
export const getPastLaunches = async () => {
    const response = await axios.get(`${API_URL}/past`);
    return response.data.slice(-20).reverse();
};