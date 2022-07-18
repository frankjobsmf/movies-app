import React, { useState } from 'react';
import { FormInputMovie } from './components/FormInputMovie';
import { GridMovies } from './components/GridMovies';
import { NothingComponent } from './components/NothingComponent';

export const FindYourMovie = () => {

    const [title, setTitle] = useState("");

    const onFindMovie = (titleMovie) => {
        setTitle(titleMovie.toLowerCase());
    }
    



    return (
        <>

            <h2 className="titlePage">Find Your Movie</h2>

            {/* input para buscar peliculas */}
            <FormInputMovie onTitle={(event) => onFindMovie(event)}/>

            {/* listado de peliculas */}

            {
                ( title !== "") ? <GridMovies title={title}/> : <NothingComponent />
            }
        </>
    )
}
