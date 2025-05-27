import Bar from "../components/Bar";

function Card({ movies }) {
  return (
    <>
      <Bar />
      <br />
      {movies.map((movie) => (
        <div
          className="card m-2 d-inline-flex wrap "
          style={{ width: "18rem" }}
        >
          <div className="card-body" key={movie.id}>
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.description}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="card-img-top"
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
