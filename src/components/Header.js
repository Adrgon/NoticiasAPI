import React from 'react'
import PropTypes from 'prop-types'

export const Header = ({titulo}) => {
    
    //const {titulo, subtitulo} = props
    
    return (
        <nav className="nav-container light-blue darken-3">
            <a href="#!" className="brand-logo center">{titulo}</a>
        </nav>
    )
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
