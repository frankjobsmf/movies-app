const apiMovie = `http://www.omdbapi.com/?apikey=ba795649`;


export const getMovieByTitle = async(initialValue = "star wars") => {    
    const resp = await fetch(`${apiMovie}&s=${initialValue}`);
    const {Search} = await resp.json();
    return Search;
}