import React, { useState } from 'react'

export const FormInputMovie = ({onTitle}) => {


    const [titleMovie, setTitleMovie] = useState("");

    const onInputChange = (e) => {
        const value = e.target.value;
        setTitleMovie(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(titleMovie.trim().length <= 1){
            return;
        }

        onTitle(titleMovie.trim());
        setTitleMovie("");

    };

    return (
        <form onSubmit={onSubmit} className="form-movies">
            <input
                type="text"
                placeholder="Encuentra tu película"
                onChange={onInputChange}
                value={titleMovie}
            />
        </form>
    )
}
