import React, { useState } from 'react';
import { Container, Segment, Grid, Button, Menu } from 'semantic-ui-react';
import Registrar from './Registrar';
import BuscarEstudiante from './BuscarEstudiante';

type formProps = {
    funcionCierre:any
}

const Logged: React.FC<formProps> = (props: formProps) => {

    const [activeItem, setActiveItem] = useState('buscar');

    const handleItemClick = (name:any) => {
        setActiveItem(name);
    }

    const cerrarSesion = () => {
        props.funcionCierre();
    }

    return (
        <div>
            <Menu>
                <Menu.Item
                name='buscar'
                active={activeItem === 'buscar'}
                onClick={() => {setActiveItem('buscar')}}
                >
                    Buscar estudiante
                </Menu.Item>

                <Menu.Item
                name='registrar'
                active={activeItem === 'registrar'}
                onClick={() => {setActiveItem('registrar')}}
                >
                    Registrar
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item
                        name='Cerrar sesión'
                        onClick={cerrarSesion}
                    />
                </Menu.Menu>
            </Menu>
            
            {
                activeItem === 'buscar' ?
                <BuscarEstudiante></BuscarEstudiante>
                :
                <Registrar></Registrar>
            } 
        </div>
    );
}

export default Logged;
