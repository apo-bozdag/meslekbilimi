import React from 'react'
import {Container, Button, Select, Input} from "semantic-ui-react";

const options = [
    { key: 'all_cities', text: 'Tüm Şehirler', value: 'all_cities' },
    { key: 'izmir', text: 'İzmir', value: 'izmir' },
    { key: 'istanbul', text: 'İstanbul', value: 'istanbul' },
];


const SearchBox = (props) => (
    <div className={"search_box_cover"}>
        <Container>
            <h3>{props.title}</h3>
            <Input type='text' placeholder='Pozisyon, firma adı, sektör' className={"search_box_input"} size={"massive"} action>
                <input />
                <Select options={options} deburr search  defaultValue={"all_cities"} noResultsMessage='Şehir bulunamadı.'/>
                <Button type='submit'>Ara</Button>
            </Input>
        </Container>
    </div>
);

export default SearchBox
