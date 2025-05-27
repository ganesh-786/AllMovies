import Bar from "../components/Bar";

function Fav() {
  return (
    <>
      <Bar />

      <div className="flex flex-col items-center justify-center h-screen">
        <br />
        <h1 className="text-4xl font-bold mb-4">Favorites</h1>
        <p className="text-lg">No favorites added yet.</p>
      </div>
    </>
  );
}

export default Fav;
