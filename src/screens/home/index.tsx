import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AddressCard, AddressContainer, AddressType, Button, Header, Main, SearchDiv } from '../../components/styles';

import api from '../../services/adresses.json';
var adresses = api.adresses;

export default function HomeScreen() {
    return (
        <Fragment>
            <Header>
                <h1 title='Página de endereços'>Endereços</h1>
                <Link to="/new"><Button title='Adicionar novo endereço'>Adicionar +</Button></Link>
            </Header>
            <SearchDiv title='Pesquisar endereço'>
                <i className="fas fa-search"></i>
                <input type="search" placeholder='Buscar'/>
            </SearchDiv>
            <Main>
                <AddressContainer>
                    {adresses.slice(0, 4).map(address => (
                        <AddressCard key={address.address} title={`Endereço ${address.name}`}>
                            <div className='address-box'>
                                <div>
                                    <h1>{address.name}</h1>
                                    <Link to="/edit"><i className="fas fa-pencil-alt" title='Editar endereço'></i></Link>
                                    <i className="fas fa-trash" title='Deletar endereço'></i>
                                </div>
                                <p>{address.address}</p>
                            </div>
                            <div className='address-type-box'>
                                <AddressType 
                                className={address.type == 'Principal' ? 'active' : 'address-type'}
                                title='Endereço Principal'>Principal</AddressType>

                                <AddressType 
                                className={address.type == 'Residencial' ? 'active' : 'address-type'}
                                title='Endereço Residencial'>Residencial</AddressType>
                            </div>
                        </AddressCard>
                    ))}
                    <Button title='Mostrar mais endereços'>Carregar Mais</Button>
                </AddressContainer>                
            </Main>
        </Fragment>
    )
}