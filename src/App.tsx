import React, { useState } from 'react';
import './App.css';
import { Header, Image } from 'semantic-ui-react';
import universidad from './assets/universidad.png';
import MainPage from './Contenedores/MainPage';
import Estudiantes from './Contenedores/Estudiantes/Estudiantes';
import Logged from './Contenedores/Profesores/Logged';

function App() {

  const [logueado, setLogueado] = useState(false);
  const [rol, setRol] = useState('');

  const inicioEstudiante = () => {
    setLogueado(true);
    setRol('estudiante');
  }

  const inicioProfesor = () => {
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
        <MainPage funcionEst={inicioEstudiante} funcionProf={inicioProfesor}></MainPage>
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
