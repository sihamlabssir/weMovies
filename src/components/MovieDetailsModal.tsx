import React from 'react';
import { Movie } from '../types/Movie';
import StarRating from './StarRating';

interface MovieDetailsModalProps {
    movie: Movie | null;
    onClose: () => void;
}

const MovieDetailsModal: React.FC<MovieDetailsModalProps> = ({ movie, onClose }) => {
    if (!movie) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <button onClick={onClose} className="close-button">X</button>
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
                {movie.videoPath && (
                    <video controls width="600">
                        <source src={movie.videoPath} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
                <StarRating movieId={movie.id} initialRating={movie.stars} />
            </div>
        </div>
    );
};

export default MovieDetailsModal;
