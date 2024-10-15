import React from 'react';
import { Movie } from '../types/Movie';
import StarRating from './StarRating';

interface MovieItemProps {
    movie: Movie;
    onSelect: (movie: Movie) => void;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie, onSelect }) => {

    return (
        <div className="movie-item" onClick={() => onSelect(movie)} style={{ cursor: 'pointer' }}>
            <img src={movie.posterPath} alt={movie.title} className="movie-poster" />
            <div className="movie-details">
                <h3>{movie.title}</h3>
                <p><strong>Année de sortie :</strong> {movie.releaseYear}</p>
                <p><strong>Sociétés de production :</strong> {movie.productionCompanies}</p>
                <p><strong>Description :</strong> {movie.description}</p>
                <p>
                    <StarRating movieId={movie.id} initialRating={movie.stars} />
                </p>
                {movie.videoTitle && (
                    <a href={movie.videoPath} target="_blank" rel="noopener noreferrer">
                        Regarder {movie.videoTitle}
                    </a>
                )}
            </div>
        </div>
    );
};

export default MovieItem;
