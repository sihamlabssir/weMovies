import { useEffect, useState } from 'react';
import { fetchGenres } from '../api/genresApi';
import { Genre } from '../types/Genre';

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchGenres()
            .then(setGenres)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return { genres, loading, error };
};

export default useGenres;
