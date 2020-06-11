import React, { useState } from 'react';
import { Container, Segment, Grid, Button } from 'semantic-ui-react';

type formProps = {
    funcionCierre:any
}

const Estudiantes: React.FC<formProps> = (props: formProps) => {

    const cierreSesion = () => {
        props.funcionCierre();
    }

    return (
        <Container>
            <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column>
                            <Container textAlign='left'>
                                <h3>Nombre: Estudiante X</h3>
                            </Container>
                        </Grid.Column>
                        <Grid.Column>
                            <Container textAlign='right'>
                                <Button onClick={cierreSesion}>Cerrar sesión</Button>
                            </Container>                        
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            <Segment>
                <h3>Agrega un área</h3>
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <Container textAlign='center'>
                                <label>Área X</label>
                            </Container>
                        </Grid.Column>
                        <Grid.Column>
                            <Container textAlign='center'>
                                <Button>Agregar</Button>   
                            </Container>                        
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <br />
            </Segment>
            <Segment>
                <h3>Agrega un conocimiento</h3>
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <Container textAlign='center'>
                                <label>Conocimiento X</label>
                            </Container>
                        </Grid.Column>
                        <Grid.Column>
                            <Container textAlign='center'>
                                <Button>Agregar</Button>   
                            </Container>                        
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <br />
            </Segment>
        </Container>
    );
}

export default Estudiantes;
