import React from 'react'
import PropTypes from 'prop-types'

//Importar custom hooks
import useSelect from './../hooks/useSelect'

// Importar estilos para este componente
import styles from './Formulario.module.css'

export const Formulario = ({guardarCategoriaProp}) => {
    
    const OPCIONES = [
        {value: 'general', label: "General"},
        {value: 'business', label: "Negocios"},
        {value: 'entertainment', label: "Entretenimiento"},
        {value: 'health', label: "Salud"},
        {value: 'science', label: "Ciencia"},
        {value: 'sports', label: "Deportes"},
        {value: 'technology', label: "Tecnologia"},
    ]

    const [categoria, SelectNoticias] = useSelect('general', OPCIONES)

    const buscarNoticias = (e) => {
        e.preventDefault()
        // Busqueda
        guardarCategoriaProp(categoria)
    }

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form 
                    onSubmit={buscarNoticias}
                >
                    <h2 className={`${styles.heading}`}>Encuentra Noticias por Categoria</h2>
                        <SelectNoticias />
                    <div className="input-field col s12">
                        <input 
                            type="submit" 
                            value="Buscar"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
Formulario.propTypes = {
    guardarCategoriaProp: PropTypes.func.isRequired
}