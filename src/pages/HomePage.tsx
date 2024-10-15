import React, { useState } from 'react';
import GenresMenu from '../components/GenresMenu';
import MovieList from '../components/MovieList';
import MovieDetailsModal from '../components/MovieDetailsModal';
import SearchBar from '../components/SearchBar';
import { Movie } from '../types/Movie';
import useGenres from '../hooks/UseGenres';
import useMovies from '../hooks/UseMovies';
import useSearchMovies from '../hooks/UseSearchMovies';
import '../styles/HomePage.css';
import useTopRatedMovie from '../hooks/useTopRatedMovie';
import StarRating from "../components/StarRating";

const HomePage: React.FC = () => {
    const { genres, loading: loadingGenres, error: errorGenres } = useGenres();
    const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
    const { movies, loading: loadingMovies, error: errorMovies } = useMovies(selectedGenre);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const { movies: suggestions, loading, error } = useSearchMovies(searchQuery);
    const { topRatedMovie, loading: loadingTopRated, error: errorTopRated } = useTopRatedMovie();


    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleSelectMovie = (movie: Movie) => {
        setSelectedMovie(movie);
    };

    return (
        <div className="home-page">
            <aside className="sidebar">
                <h2>Genres</h2>
                {loadingGenres && <p>Chargement des genres...</p>}
                {errorGenres && <p>Erreur: {errorGenres}</p>}
                <aside className="sidebar">
                    {loadingGenres && <p>Chargement des genres...</p>}
                    {errorGenres && <p>Erreur: {errorGenres}</p>}
                    <GenresMenu
                        genres={genres}
                        selectedGenreId={selectedGenre}
                        onGenreSelect={setSelectedGenre}
                    />
                </aside>
            </aside>

            <main className="main-content">
                <SearchBar
                    onSearch={handleSearch}
                    onSelectMovie={handleSelectMovie}
                />

                {loadingTopRated && <p>Chargement du film le mieux noté...</p>}
                {errorTopRated && <p>Erreur lors de la récupération du film le mieux noté: {errorTopRated}</p>}
                {topRatedMovie && (
                    <div className="highest-rated-movie">
                        <h2>Film le mieux noté :</h2>
                        <div className="movie-item-related" onClick={() => handleSelectMovie(topRatedMovie)}>
                            <img src={topRatedMovie.posterPath} alt={topRatedMovie.title} className="movie-poster"
                                 style={{width: '100px', marginRight: '10px'}}/>

                            <h3>{topRatedMovie.title}</h3>
                            <p>{topRatedMovie.description}</p>
                            <p><StarRating movieId={topRatedMovie.id} initialRating={topRatedMovie.stars}/></p>
                        </div>
                    </div>
                )}

                {loading && <p>Chargement des suggestions...</p>}
                {error && <p>Erreur lors de la recherche: {error}</p>}

                {suggestions.length > 0 ? (
                    <div>
                        <h2>Suggestions de films :</h2>
                        <MovieList movies={suggestions} onMovieSelect={handleSelectMovie} />
                    </div>
                ) : (
                    <>
                        {loadingMovies && <p>Chargement des films...</p>}
                        {errorMovies && <p>Erreur: {errorMovies}</p>}
                        {selectedGenre && (
                            <div>
                                <h2>Films par genre :</h2>
                                <MovieList movies={movies} onMovieSelect={handleSelectMovie} />
                            </div>
                        )}
                    </>
                )}

                {loadingMovies && <p>Chargement des films...</p>}
                {errorMovies && <p>Erreur: {errorMovies}</p>}
                <MovieDetailsModal movie={selectedMovie} onClose={() => setSelectedMovie(null)}/>
            </main>
        </div>
    )
};

export default HomePage;