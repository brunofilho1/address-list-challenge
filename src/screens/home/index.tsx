import React, { Fragment } from 'react';
import { Button, Header, Main, SearchDiv } from '../../components/styles';

export default function Home() {
    return (
        <Fragment>
            <Header>
                <h1>Endereços</h1>
                <Button>Adicionar +</Button>
            </Header>
            <SearchDiv>
                <i className="fas fa-search"></i>
                <input type="search" placeholder='Buscar'/>
            </SearchDiv>
            <Main>
                
            </Main>
        </Fragment>
    )
}