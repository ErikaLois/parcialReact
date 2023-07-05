import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Peliculas = (info) => {


    return (  

        <Fragment>
            
            {info.peliculas?.map((pelicula) => 
                <div className='col d-flex justify-content-center m-3 pt-3 pb-3 '>
                    <Card bg={'dark'} text={'light'} style={{ width: '19rem'}}>
                        <Card.Img variant="top" src={pelicula.Poster} style = {{height: '80%'}} />
                        <Card.Body className='d-flex flex-column'>
                            <Card.Title className='text-center' >
                                {pelicula.Title}
                            </Card.Title>
                            <Button 
                                id='color'
                                className='mt-auto btn-peliculas' 
                                variant="info"
                                type='button'
                                onClick={() => info.accionBoton(pelicula)}
                                >
                                    {info.accion}
                            </Button>
                        </Card.Body>
                        </Card>
                </div>

            )}    

        </Fragment>
    );
}

 
export default Peliculas;