import React, { useState, useEffect } from 'react';
import { Movie } from '../types/Movie';

interface SearchBarProps {
    onSelectMovie: (movie: Movie) => void;
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSelectMovie, onSearch }) => {
    const [query, setQuery] = useState<string>('');
    const [suggestions, setSuggestions] = useState<Movie[]>([]);
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

    useEffect(() => {
        if (query.length > 2) {
            onSearch(query);
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    }, [query, onSearch]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSelect = (movie: Movie) => {
        setQuery(movie.title);
        setShowSuggestions(false);
        onSelectMovie(movie);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Rechercher un film..."
            />
            {showSuggestions && suggestions.length > 0 && (
                <ul className="suggestions">
                    {suggestions.map((movie) => (
                        <li key={movie.id} onClick={() => handleSelect(movie)}>
                            {movie.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
