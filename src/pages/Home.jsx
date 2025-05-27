import Bar from "../components/Bar";

function Home() {
  return (
    <>
      <Bar />
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main className="px-3">
          <h1>Watch All Movies on </h1>
          <h2>GC_Movies</h2>
          <p className="lead">
            We offer 20% discount on all movies. Watch your favorite movies
            online with us. We have a wide range of movies available for you.
          </p>
          <p className="lead">
            <a
              href="#"
              className="btn btn-lg btn-light fw-bold border-white bg-white"
            >
              Learn more
            </a>
          </p>
        </main>
      </div>
    </>
  );
}

export default Home;
