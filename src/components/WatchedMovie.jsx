export default function WatchedMovie({
  movie,
  onDeleteWatched,
  onSelectMovie,
}) {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      {movie.poster !== "N/A" ? (
        <img src={movie.poster} alt={`${movie.Title} poster`} />
      ) : (
        <img
          src="https://via.placeholder.com/300x444?text=No+poster"
          alt="No poster"
        />
      )}
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>

        <button
          className="btn-delete"
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
}
