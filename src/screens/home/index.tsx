import React, { Fragment } from 'react';
import { AddressCard, AddressContainer, AddressType, Button, Header, Main, SearchDiv } from '../../components/styles';

import api from '../../services/adresses.json';
var adresses = api.adresses;

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
                <AddressContainer>
                    {/* <AddressCard>
                        <div className='address-box'>
                            <div>
                                <h1>Villega Vila Velha</h1>
                                <i className="fas fa-pencil-alt"></i>
                                <i className="fas fa-trash"></i>
                            </div>
                            <p>Rua Dório Silva, 100 — Vila Guaranhuns, Vila Velha</p>
                        </div>
                        <div className='address-type-box'>
                            <AddressType>Principal</AddressType>
                            <AddressType>Residencial</AddressType>
                        </div>
                    </AddressCard> */}
                    {adresses.slice(0, 4).map(address => (
                        <AddressCard key={address.address}>
                            <div className='address-box'>
                                <div>
                                    <h1>{address.name}</h1>
                                    <i className="fas fa-pencil-alt"></i>
                                    <i className="fas fa-trash"></i>
                                </div>
                                <p>{address.address}</p>
                            </div>
                            <div className='address-type-box'>
                                <AddressType className={address.type == 'Principal' ? 'active' : 'address-type'}>Principal</AddressType>
                                <AddressType className={address.type == 'Residencial' ? 'active' : 'address-type'}>Residencial</AddressType>
                            </div>
                        </AddressCard>
                    ))}
                    <Button>Carregar Mais</Button>
                </AddressContainer>                
            </Main>
        </Fragment>
    )
}