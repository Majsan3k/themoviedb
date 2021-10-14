import React from 'react'
import PropTypes from 'prop-types';
import './movie.css'

const Movie = (props) => {
    const { title, img_url } = props;

    return (
        <div className='movie'>
            <img className='img' src={img_url}/>
            <div className='title'>{title}</div>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    img_url: PropTypes.string
}

export default Movie;