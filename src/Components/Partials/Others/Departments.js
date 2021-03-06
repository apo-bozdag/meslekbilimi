import React, {Component} from 'react';
import { Container, Grid, Card, Divider } from 'semantic-ui-react'

class Departments extends Component {

    render() {
        return (
            <div>
                <Container className={"departments_home"}>
                    <h2>Departmanlar</h2>
                    <Divider />
                    <Grid columns={3} divided>
                        <Grid.Row>
                            <Grid.Column>
                                <Card
                                    fluid
                                    href='#card-example-link-card'
                                    header='Uzman'
                                    meta='İş İlanları'
                                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Card
                                    fluid
                                    href='#card-example-link-card'
                                    header='Yönetici'
                                    meta='İş İlanları'
                                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Card
                                    fluid
                                    href='#card-example-link-card'
                                    header='Yeni Mezun'
                                    meta='İş İlanları'
                                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                                />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column>
                                <Card
                                    fluid
                                    href='#card-example-link-card'
                                    header='İşçi'
                                    meta='İş İlanları'
                                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Card
                                    fluid
                                    href='#card-example-link-card'
                                    header='Hizmet Personeli'
                                    meta='İş İlanları'
                                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Card
                                    fluid
                                    href='#card-example-link-card'
                                    header='Engelli'
                                    meta='İş İlanları'
                                    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                                />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default Departments;