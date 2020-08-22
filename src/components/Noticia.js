import React from 'react'
import PropTypes from 'prop-types'

export const Noticia = ({noticiaProp}) => {
    
    const {urlToImage, url, title, description, source} = noticiaProp
    const imagen =  (urlToImage) ?
                <div className="card-image">
                    <img src={urlToImage} alt={title}/>
                    <span className="card-title">{source.name}</span>
                </div>
                : null


    return (
        <div className="col s12 m6 l4">
          <div className="card">
            {imagen}
            <div className="card-content">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <div className="card-action">
              <a 
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                  Ver Noticia Completa
                </a>
            </div>
          </div>
        </div>
    )
}

Noticia.propTypes = {
  noticiaProp: PropTypes.object.isRequired
}