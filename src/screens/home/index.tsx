import React, { Fragment } from 'react';
import { AddressCard, AddressContainer, AddressType, Button, Header, Main, SearchDiv } from '../../components/styles';

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
                    <AddressCard>
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
                    </AddressCard>
                    <AddressCard>
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
                    </AddressCard>
                    <AddressCard>
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
                    </AddressCard>
                </AddressContainer>
            </Main>
        </Fragment>
    )
}