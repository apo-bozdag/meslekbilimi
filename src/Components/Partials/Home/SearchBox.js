import React from 'react'
import {Container, Button, Select, Input} from "semantic-ui-react";

const options = [
    { key: 'select_city', text: 'Şehir Seç', value: 'select_city' },
    { key: 'izmir', text: 'İzmir', value: 'izmir' },
    { key: 'istanbul', text: 'İstanbul', value: 'istanbul' },
];


const SearchBox = (props) => (
    <div className={"search_box_cover"}>
        <Container>
            <h3>{props.title}</h3>
            <Input type='text' placeholder='Pozisyon, firma adı, sektör' className={"search_box_input"} size={"massive"} action>
                <input />
                <Select options={options} deburr search  defaultValue={"select_city"} noResultsMessage='Şehir bulunamadı.'/>
                <Button type='submit'>Ara</Button>
            </Input>
        </Container>
    </div>
);

export default SearchBox
