import { useEffect, useState } from 'react';
import axios from 'axios';
import { Movie } from '../types/Movie';
import { API_URL } from '../config/config';

const useSearchMovies = (query: string) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (query.length < 3) {
            setMovies([]);
            return;
        }

        setLoading(true);
        axios
            .get<Movie[]>(`${API_URL}/movies/search`, { params: { query } })
            .then((response) => setMovies(response.data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [query]);

    return { movies, loading, error };
};

export default useSearchMovies;
