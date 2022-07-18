export const GridMoviesItem = ({Title, Type, Poster, Year}) => {
  return (
    <div className="grid-movies-item animate__animated animate__fadeIn animate__slow">
        <img src={Poster} alt="Image Movie" />
        <h3>{Title}</h3>
        <p>{Type}</p>
        <p>Lanzamiento: {Year}</p>
    </div>
  )
}
