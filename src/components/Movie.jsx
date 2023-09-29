export default function Movie({ movie, onSelectMovie }) {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      {movie.Poster !== "N/A" ? (
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
      ) : (
        <img
          src="https://via.placeholder.com/300x444?text=No+poster"
          alt="No poster"
        />
      )}
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>📆</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
