import React, { useState } from 'react';
import { Container, Segment, Grid, Button, Input, Radio } from 'semantic-ui-react';

const Registrar: React.FC<{}> = () => {

    return (
        <div>
            <Container textAlign='center'>
                <h2>Registrar nueva área</h2>
            </Container>
            <br />
            <br />
            <Container>
                <Segment>
                    <h3>Nombre del área</h3>
                    <Grid columns={2} divided>
                        <Grid.Row>
                            <Grid.Column>
                                <Container textAlign='center'>
                                    <Input placeholder='Área'/>
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
                <br />
                <br />
                <Container textAlign='center'>
                    <h2>Registrar nuevo conocimiento</h2>
                </Container>
                <br />
                <br />
                <Segment>
                    <h3>Nombre del conocimiento</h3>
                    <Grid columns={2} divided>
                        <Grid.Row>
                            <Grid.Column>
                                <Container textAlign='center'>
                                    <Input placeholder='Conocimiento'/>
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
                <br />
                <br />
                <Container textAlign='center'>
                    <h2>Registrar nuevo usuario</h2>
                </Container>
                <br />
                <br />
                <Segment>
                    <Grid columns={2} divided>
                        <Grid.Row>
                            <Grid.Column>
                                <Container textAlign='center'>
                                    <label>Nombre del estudiante:</label>
                                </Container>
                            </Grid.Column>
                            <Grid.Column>
                                <Container textAlign='center'>
                                    <Input placeholder='Nombre'/> 
                                </Container>                        
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Container textAlign='center'>
                                    <label>Nombre del usuario:</label>
                                </Container>
                            </Grid.Column>
                            <Grid.Column>
                                <Container textAlign='center'>
                                    <Input placeholder='Username'/> 
                                </Container>                        
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Container textAlign='center'>
                                    <label>Contraseña:</label>
                                </Container>
                            </Grid.Column>
                            <Grid.Column>
                                <Container textAlign='center'>
                                    <Input placeholder='Contraseña'/> 
                                </Container>                        
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Container textAlign='center'>
                                    <label>Identificación:</label>
                                </Container>
                            </Grid.Column>
                            <Grid.Column>
                                <Container textAlign='center'>
                                    <Input placeholder='Identificación'/> 
                                </Container>                        
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Container textAlign='center'>
                                    <label>Correo:</label>
                                </Container>
                            </Grid.Column>
                            <Grid.Column>
                                <Container textAlign='center'>
                                    <Input placeholder='Correo'/> 
                                </Container>                        
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Container textAlign='center'>
                                    <label>Rol:</label>
                                </Container>
                            </Grid.Column>
                            <Grid.Column>
                                <Container textAlign='center'>
                                    <Grid columns={2} divided>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Radio label='Estudiante' />
                                            </Grid.Column>
                                            <Grid.Column>
                                                <Radio label='Profesor'/>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Container>                        
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Container textAlign='center'>
                                    <label>Carrera:</label>
                                </Container>
                            </Grid.Column>
                            <Grid.Column>
                                <Container textAlign='center'>
                                    <Grid columns={2}>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Radio label='Sistemas' />
                                            </Grid.Column>
                                            <Grid.Column>
                                                <Radio label='Telecomunicaciones'/>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Container>                        
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <br />
                    <Container textAlign='center'>
                        <Button>Registrar</Button>
                    </Container>
                    <br />
                </Segment>
                <br />
                <br />
                <br />
            </Container>
        </div>
    );
}

export default Registrar;
