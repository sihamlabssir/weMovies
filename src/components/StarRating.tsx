import React, { useState } from 'react';
import { API_URL } from '../config/config';

interface StarRatingProps {
    movieId: number;
    initialRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ movieId, initialRating = 0 }) => {
    const [rating, setRating] = useState<number>(initialRating);
    const handleRating = (value: number) => {
        setRating(value);

        fetch(`${API_URL}/ratings/${movieId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ rate: value }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erreur lors de l\'envoi de la note');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Note enregistrée:', data);
            })
            .catch((error) => {
                console.error('Erreur:', error);
            });
    };

    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={`star ${star <= rating ? 'filled' : ''}`}
                    onClick={() => handleRating(star)}
                    style={{ cursor: 'pointer' }}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default StarRating;
