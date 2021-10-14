import React from 'react'
import PropTypes from 'prop-types';
import './button.css'

const Button = (props) => {
    const { text, onClick } = props;

    return (
        <button className='btn' onClick={onClick}>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button;