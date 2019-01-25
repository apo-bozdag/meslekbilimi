import React, {Component} from 'react';
import {Container, Grid, Accordion, Form, Menu, Input, Button, Card} from "semantic-ui-react";
import CreateLink from "../Partials/Others/CreateLink";

const CitiesForm = (
    <Form>
        <Form.Group grouped>
            <Form.Checkbox label='İstanbul Anadolu' name='city' value='istanbul_anadolu' />
            <Form.Checkbox label='İstanbul Avrupa' name='city' value='istanbul_avrupa' />
            <Form.Checkbox label='İzmir' name='city' value='izmir' />
            <Form.Checkbox label='Kocaeli' name='city' value='kocaeli' />
        </Form.Group>
    </Form>
);

const SectorsForm = (
    <Form>
        <Form.Group grouped>
            <Form.Checkbox label='Yapı' name='color' value='yapi' />
            <Form.Checkbox label='İnşaat' name='color' value='insaat' />
            <Form.Checkbox label='Bilişim' name='color' value='bilisim' />
            <Form.Checkbox label='Otomotiv' name='color' value='otomotiv' />
        </Form.Group>
    </Form>
);

class Jobs extends Component {
    componentDidMount() {
        document.title = 'İş İlanları'
    }

    state = { activeIndex: 0 };

    handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index;

        this.setState({ activeIndex: newIndex })
    };

    render() {
        const { activeIndex } = this.state;

        return (
            <div className={"jobs"}>
                <Container>
                    <Grid divided='vertically'>
                        <Grid.Row columns={2}>

                            <Grid.Column width={4}>
                                <Input action={{ icon: 'search' }} className={"filter_keyword_input"} placeholder='Anahtar Kelime' />

                                <Accordion as={Menu} vertical className={"filter_menu"}>

                                    <Menu.Item>
                                        <Accordion.Title
                                            active={activeIndex === 0}
                                            content='Şehirler'
                                            index={0}
                                            onClick={this.handleClick}
                                        />
                                        <Accordion.Content active={activeIndex === 0} content={CitiesForm} />
                                    </Menu.Item>

                                    <Menu.Item>
                                        <Accordion.Title
                                            active={activeIndex === 1}
                                            content='Firma Sektörü'
                                            index={1}
                                            onClick={this.handleClick}
                                        />
                                        <Accordion.Content active={activeIndex === 1} content={SectorsForm} />
                                    </Menu.Item>
                                </Accordion>
                            </Grid.Column>

                            <Grid.Column width={12}>
                               <h3 className={"job-ad-title"}>İlanlar</h3>

                                <div className={"job-list"}>
                                    <Card.Group>
                                        <Card>
                                            <Card.Content>
                                                <p className='right floated'>25.01.2019</p>
                                                <Card.Header>
                                                    <CreateLink url={"#"}>Grafik Tasarım Uzmanı</CreateLink>
                                                </Card.Header>
                                                <Card.Meta>RadKod Ltd. Şti.</Card.Meta>
                                                <Card.Description>
                                                    İzmir, İstanbul
                                                </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                                <div className='ui two buttons'>
                                                    <Button basic color='green'>
                                                        Başvur
                                                    </Button>
                                                </div>
                                            </Card.Content>
                                        </Card>
                                    </Card.Group>
                                </div>

                            </Grid.Column>

                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        );
    }
}


export default Jobs;