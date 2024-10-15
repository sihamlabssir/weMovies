// src/components/GenresMenu.tsx
import React from 'react';
import { Genre } from '../types/Genre'; // Assurez-vous que vous avez une interface Genre

interface GenresMenuProps {
    genres: Genre[];
    selectedGenreId: number | null;
    onGenreSelect: (genreId: number) => void;
}

const GenresMenu: React.FC<GenresMenuProps> = ({ genres, selectedGenreId, onGenreSelect }) => {
    return (
        <div className="genres-menu">
            <ul>
                {genres.map((genre) => (
                    <li key={genre.id}>
                        <label>
                            <input
                                type="radio"
                                name="genre"
                                value={genre.id}
                                checked={selectedGenreId === genre.id}
                                onChange={() => onGenreSelect(genre.id)}
                            />
                            {genre.name}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GenresMenu;
