export const CardEpisode = ({ element }) => {
  return (
    <div className="card">
      <h1>{element.name}</h1>
      <p>{element.air_date}</p>
      <p>{element.episode}</p>
    </div>
  );
};
export const CardLocation = ({ element }) => {
  return (
    <div className="card">
      <h1>{element.name}</h1>
      <p>{element.type}</p>
      <p>{element.dimension}</p>
    </div>
  );
};
