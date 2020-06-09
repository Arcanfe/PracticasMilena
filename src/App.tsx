import React from 'react';
import './App.css';
import { Header, Image, Segment, Grid, Form, Button, Divider, Container } from 'semantic-ui-react';
import universidad from './assets/universidad.png';
import upc from './assets/upc.png';

function App() {
  return (
    <div >
      <Header as='h3' block inverted >
        <Image src={universidad} size='massive'/>
        Universidad Piloto de Colombia- Prácticas profesionales
      </Header>
      <Container>
        <Segment placeholder>
          <Grid columns={2} relaxed='very' stackable>
            <Grid.Column >
              <Image src={upc} size='medium' centered/>
            </Grid.Column>

            <Grid.Column verticalAlign='middle'>
              <Form>
                <Form.Input
                  icon='user'
                  iconPosition='left'
                  label='Usuario'
                  placeholder='Usuario'
                />
                <Form.Input
                  icon='lock'
                  iconPosition='left'
                  label='Contraseña'
                  type='Contraseña'
                />

                <Button primary>Iniciar sesión</Button>
              </Form>
            </Grid.Column>
          </Grid>

          <Divider vertical />
        </Segment>
      </Container>
    </div>
  );
}

export default App;
