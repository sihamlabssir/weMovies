import React from 'react';
import { Movie } from '../types/Movie';
import MovieItem from './MovieTem';

interface MovieListProps {
    movies: Movie[];
    onMovieSelect: (movie: Movie) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onMovieSelect }) => {
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} onSelect={onMovieSelect} />
            ))}
        </div>
    );
};

export default MovieList;
