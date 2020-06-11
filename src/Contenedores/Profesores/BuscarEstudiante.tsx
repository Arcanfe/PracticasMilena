import React, { useState } from 'react';
import { Container, Segment, Grid, Button, Table } from 'semantic-ui-react';

const BuscarEstudiante: React.FC<{}> = () => {

    

    return (
        <div>
            <Container textAlign='center'>
                <h2>Buscar un estudiante</h2>
            </Container>
            <br />
            <br />
            <Container>
                <Segment>
                    <h3>Seleccionar un área</h3>
                    <Grid columns={2} divided>
                        <Grid.Row>
                            <Grid.Column>
                                <Container textAlign='center'>
                                    <label>Área X</label>
                                </Container>
                            </Grid.Column>
                            <Grid.Column>
                                <Container textAlign='center'>
                                    <Button>Seleccionar</Button>   
                                </Container>                        
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <br />
                </Segment>
                <Segment>
                    <h3>Selecciona un conocimiento:</h3>
                    <Grid columns={2} divided>
                        <Grid.Row>
                            <Grid.Column>
                                <Container textAlign='center'>
                                    <label>Conocimiento X</label>
                                </Container>
                            </Grid.Column>
                            <Grid.Column>
                                <Container textAlign='center'>
                                    <Button>Seleccionar</Button>   
                                </Container>                        
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <br />
                </Segment>
            </Container>
            <br />
            <br />
            <Container textAlign='center'>
                <Button>Buscar</Button>
            </Container>
            <br />
            <br />
            <Container>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Nombre</Table.HeaderCell>
                            <Table.HeaderCell>Identificación</Table.HeaderCell>
                            <Table.HeaderCell>Correo</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Jamie</Table.Cell>
                            <Table.Cell>11231231</Table.Cell>
                            <Table.Cell>aaaa@aaaa.com</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jamie</Table.Cell>
                            <Table.Cell>11231231</Table.Cell>
                            <Table.Cell>aaaa@aaaa.com</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Jamie</Table.Cell>
                            <Table.Cell>11231231</Table.Cell>
                            <Table.Cell>aaaa@aaaa.com</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Container>
            <br />
            <br />
        </div>
    );
}

export default BuscarEstudiante;
