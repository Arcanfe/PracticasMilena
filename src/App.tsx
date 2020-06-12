import React, { useState } from 'react';
import './App.css';
import { Image, Segment, Grid, Form, Button, Divider, Container, Header } from 'semantic-ui-react';
import universidad from './assets/universidad.png';
import upc from './assets/upc.png';
import Estudiantes from './Contenedores/Estudiantes/Estudiantes';
import Logged from './Contenedores/Profesores/Logged';
import axios from 'axios';

function App() {

  const [logueado, setLogueado] = useState(false);
  const [rol, setRol] = useState('');
  const [nombre, setNombre] = useState('');

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [habilitado, setHabilitado] = useState(true);

  const actualizarUsuario = (e: any) => {
      setUsuario(e.target.value);
      if(usuario !== '' && password !== ''){
          setHabilitado(false);
      }
  }

  const actualizarPassword = (e: any) => {
      setPassword(e.target.value);
      if(usuario !== '' && password !== ''){
          setHabilitado(false);
      }
  }

  const login = () => {
        axios.post('http://localhost:8003/usuario/login?nick=' + usuario + '&password=' + password, '')
        .then(result => {
            if(result.data.rol_id === 1){
              inicioEstudiante(result.data.nombre);
            }
            else{
              inicioProfesor(result.data.nombre);
            }
        }).catch(error => {
            console.log(error);
        }); 
    }
  
  const inicioEstudiante = (e:any) => {
    setNombre(e);
    console.log(nombre);
    setLogueado(true);
    setRol('estudiante');
  }

  const inicioProfesor = (e:any) => {
    setNombre(e);
    console.log(nombre);
    setLogueado(true);
    setRol('profesor');
  }

  const cierreSesion = () => {
    setLogueado(false);
    setRol('');
  }

  return (
    <div >
      <Header as='h3' block inverted >
        <Image src={universidad} size='massive'/>
        Universidad Piloto de Colombia- Prácticas profesionales
      </Header>
      {
        logueado === false ?
        (
          <Container>
            <br />
            <br />
            <br />
            <br />
            <Segment placeholder>
            <Grid columns={2} relaxed='very' stackable>
                <Grid.Column >
                <Image src={upc} size='medium' centered/>
                </Grid.Column>

                <Grid.Column verticalAlign='middle'>
                <Form>
                    <Form.Field>
                        <label>Usuario</label>
                        <input placeholder='Usuario' onChange={actualizarUsuario}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Contraseña</label>
                        <input placeholder='Contraseña' onChange={actualizarPassword}/>
                    </Form.Field>
                    <Button onClick={login} disabled={habilitado}>Iniciar sesión</Button>
                </Form>
                </Grid.Column>
            </Grid>

            <Divider vertical />
            </Segment>
        </Container>
        )
        :
        (rol === 'estudiante'?
        <Estudiantes funcionCierre={cierreSesion}></Estudiantes>
        :
        <Logged funcionCierre={cierreSesion}></Logged>)
      }
    </div>
  );
}

export default App;
