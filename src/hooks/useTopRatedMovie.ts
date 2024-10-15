import { useEffect, useState } from 'react';
import axios from 'axios';
import { Movie } from '../types/Movie';
import {API_URL} from '../config/config';

const useTopRatedMovie = () => {
    const [topRatedMovie, setTopRatedMovie] = useState<Movie | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTopRatedMovie = async () => {
            setLoading(true);
            try {
                const response = await axios.get<Movie>(`${API_URL}/movies/top-rated`);
                setTopRatedMovie(response.data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Une erreur est survenue");
            } finally {
                setLoading(false);
            }
        };

        fetchTopRatedMovie();
    }, []);

    return { topRatedMovie, loading, error };
};

export default useTopRatedMovie;
