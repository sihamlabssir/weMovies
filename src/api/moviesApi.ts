import axios from 'axios';
import { Movie } from '../types/Movie';
import {API_URL} from "../config/config";

export const fetchMoviesByGenre = async (genreId: number): Promise<Movie[]> => {
    const response = await axios.get<Movie[]>(`${API_URL}/movies/genres/${genreId}`);
    return response.data;
};
