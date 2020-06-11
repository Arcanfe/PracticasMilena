import React, { useState } from 'react';
import { Image, Segment, Grid, Form, Button, Divider, Container } from 'semantic-ui-react';
import upc from '../assets/upc.png';

type formProps = {
    funcionEst: any,
    funcionProf: any
}

const MainPage: React.FC<formProps> = (props: formProps) => {
   
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const actualizarUsuario = (e: any) => {
        setUsuario(e.target.value);
    }

    const actualizarPassword = (e: any) => {
        setPassword(e.target.value);
    }

    const login = () => {
        props.funcionProf();
    }

    return (
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
                    <Button primary onClick={login}>Iniciar sesión</Button>
                </Form>
                </Grid.Column>
            </Grid>

            <Divider vertical />
            </Segment>
        </Container>
    );
}

export default MainPage;
