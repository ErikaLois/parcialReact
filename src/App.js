import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Peliculas from './components/Peliculas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.css';
import Header from './components/Header';
import Busqueda from './components/Busqueda';
import Footer from './components/Footer';



function App() {

  //Se inicia el local storage
  let peliculasLocalStorage = (items) => {
    localStorage.setItem('localStorageFavoritos', JSON.stringify(items))
  };

  //Creo una lista de películas
  const[peliculas, guardarPelicula] = useState([]);

  //Creo una búsqueda de películas donde se llama a la API
  const [busqueda, crearBusqueda] = useState(['']);

  //Se crea un Hook para guardar las películas favoritas
  const [peliculasFav, agregarFav] = useState([]);


  const obtenerPelicula = async(busqueda) => {
    const url = `http://www.omdbapi.com/?s=${busqueda}&apikey=48066cf7`;

    try{
      const resultado = await fetch(url);

      const resultadoJson = await resultado.json();

      if (resultadoJson.Search) {
        guardarPelicula(resultadoJson.Search);
      }
    } catch(error) {
      console.log(error);
    }
    
  };

  useEffect( () => {
    obtenerPelicula(busqueda);
  }, [busqueda])

  useEffect(() => {
    const favoritosEnLocalStorage = JSON.parse(
      localStorage.getItem('localStorageFavoritos')
    );

    agregarFav(favoritosEnLocalStorage);

  }, []);

  //Se crea una función para agregar la película favorita a la sección de favoritos
  const agregarFavoritos = (pelicula) => {
    const listaFavoritos = [...peliculasFav, pelicula];
    /*if(!(peliculasFav.includes(pelicula))){
      agregarFav(listaFavoritos);
    }*/
    agregarFav(listaFavoritos);
    peliculasLocalStorage(listaFavoritos);
  };

  const eliminarFavoritos = (pelicula) => {
    const listaFavoritos = peliculasFav.filter(
      (favorito) => favorito.imdbID !== pelicula.imdbID);
      agregarFav(listaFavoritos);
      peliculasLocalStorage(listaFavoritos);
  };
 
return (
    
  <Fragment>
    <Container fluid={true} className='peliculas body'>
      <Header/>
      <Row className='d-flex align-items-center pt-4 mb-4'>
        <Busqueda 
          busqueda={busqueda}
          crearBusqueda={crearBusqueda} />
      </Row>
      <Row className='fondo'>
        <Peliculas 
          peliculas ={peliculas}
          accion = 'Agregar a favoritos'
          accionBoton={agregarFavoritos}/>
      </Row>
      <Row className='d-flex justify-content-center division'>
        <h2 className='h2'>FAVORITOS</h2>
      </Row>
      <Row>
        <Peliculas 
          peliculas ={peliculasFav}
          accion = 'Eliminar de favoritos'
          accionBoton={eliminarFavoritos}/>
      </Row>

      <Row>
        <Footer/>
      </Row>
    </Container>
    

  </Fragment>
);
}

export default App;
