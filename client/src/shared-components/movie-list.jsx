import React from 'react';
import PropTypes from 'prop-types';
import Movie from './movie';

const getImgUrl = (base_url, poster_path) => base_url + '/w500' + poster_path;

const MovieList = (props) => {
    const { movies, imgConfig } = props;
    const { base_url } = imgConfig;

    return (
        <>
            {movies.map(({ title, poster_path }, index) =>
                <Movie
                    key={index}
                    img_url={getImgUrl(base_url, poster_path)}
                    title={title}
                />
            )}
        </>
    )
}

MovieList.propeTypes = {
    movies: PropTypes.array.isRequired
}

export default MovieList;