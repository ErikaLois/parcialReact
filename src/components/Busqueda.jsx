import React, { Fragment } from 'react';
import Col from 'react-bootstrap/Col';

const Busqueda = (info) => {
    return (  
        <Fragment>
            <div className='d-flex justify-content-center division'>
                <div className='m-4'>
                    <h2 className='h2'>ELIGE UNA PELÍCULA O SERIE</h2>
                </div>
                <div className='m-4'>
                    <input 
                        value={info.value}
                        onChange={(event) => info.crearBusqueda(event.target.value)}
                        className='form-control' 
                        placeholder='Buscar película o serie'>
                    </input>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Busqueda ;