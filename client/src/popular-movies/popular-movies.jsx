import React, { useEffect, useState } from 'react'
import Button from '../shared-components/buttons/button'
import MovieList from '../shared-components/movie-list'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import './popular-movies.css'
import MovieDBLogo from '../shared-components/movie-db-logo';


const PopularMovies = () => {
    const [movies, setMovies] = useState(null)
    const [showMovies, setShowMovies] = useState(false);
    const [imgConfig, setImgConfig] = useState(null)

    useEffect(() => {
        fetch('/imageConfiguration')
            .then((res) => res.json())
            .then((data => setImgConfig(data.message)))
    })

    const getPopularMovies = () => {
        setShowMovies(true)

        fetch('/popularMovies')
            .then((res) => res.json())
            .then((data) => setMovies(data.message))
    }

    return (
        <>
        <span>Source: </span>
        <MovieDBLogo height='2rem' margin='2rem' />
            <Button text="Hämta filmer" onClick={() => getPopularMovies()} />
            {showMovies &&
                <div className='movieList'>{!movies ?
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    /> :
                    <MovieList movies={movies} imgConfig={imgConfig} />
                }

                </div>
            }


        </>

    )
}

export default PopularMovies;