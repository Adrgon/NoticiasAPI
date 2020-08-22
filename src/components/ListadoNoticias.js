import React from 'react'
import PropTypes from 'prop-types'

import {Noticia} from './Noticia'

export const ListadoNoticias = ({noticiasProp}) => {
    return (
        <div className="row" >
            {noticiasProp.map( (noticia)=>(
                <Noticia 
                        key={noticia.url} 
                        noticiaProp={noticia}
                />
            )
        )}     
        </div>  
    )
}

ListadoNoticias.propTypes = {
    noticiasProp: PropTypes.array.isRequired
}
