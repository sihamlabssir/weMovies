import axios from 'axios';
import { Genre } from '../types/Genre';
import { API_URL } from '../config/config';


export const fetchGenres = async (): Promise<Genre[]> => {
    const response = await axios.get<Genre[]>(`${API_URL}/genres`);
    return response.data;
};
