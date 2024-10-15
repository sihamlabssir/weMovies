import { useEffect, useState } from 'react';
import { fetchMoviesByGenre } from '../api/moviesApi';
import { Movie } from '../types/Movie';

const useMovies = (genreId: number | null) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (genreId === null) {
            setMovies([]);
            setLoading(false);
            return;
        }

        setLoading(true);
        fetchMoviesByGenre(genreId)
            .then(setMovies)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [genreId]);

    return { movies, loading, error };
};

export default useMovies;
