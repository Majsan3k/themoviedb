import React from 'react'
import {ReactComponent as Logo} from '../themoviedb.svg'
import PropTypes from 'prop-types'

const MovieDBLogo = (props) => {
    const {height, margin} = props;

    return (
        <Logo style={{height: height, margin: margin}}/>
    )
}

MovieDBLogo.propTypes = {
    height: PropTypes.string
}

export default MovieDBLogo