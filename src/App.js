import React, { useState, useEffect } from 'react';
//358b0bffab1842399a3c74576d7aac70
import {Header} from './components/Header'
import {ListadoNoticias} from './components/ListadoNoticias'

import {Formulario} from './components/Formulario'

function App() {
  
  // Da un estado al componente
  const [noticias, setNoticias] = useState([])
  const [categoria, guardarCategoria] = useState('')

  useEffect( ()=>{
    const consultarAPI = async ()=>{
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=358b0bffab1842399a3c74576d7aac70`
      const respuesta = await fetch(url)
      const noticias = await respuesta.json()
      //console.log(noticias.articles)
      setNoticias(noticias.articles)

    }
    consultarAPI()
  }, [categoria])
  
  return (
    <>
      <Header titulo="Noticias API" />
      <Formulario guardarCategoriaProp={guardarCategoria}/>
      <ListadoNoticias noticiasProp={noticias}/>
    </>
  );
}

export default App;
