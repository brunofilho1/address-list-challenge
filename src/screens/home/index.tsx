import React, { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AddressCard, AddressContainer, AddressType, Button, Header, Main, SearchDiv } from '../../components/styles';
import api from '../../services/adresses.json';

var messageCard = document.querySelector('.messageCard')
export function hideMessage() {
    messageCard?.classList.add('hideThisElement');
    messageCard?.classList.remove('messageCard');
}

export default function HomeScreen() {

    var navigate = useNavigate();

    const [adresses, setAdresses] = useState(api.adresses);
    const [selectedCard, setSelectedCard] = useState({});

    function deleteThisCard(address: object) {
        const addressSelected = adresses.find(addressList => addressList == address);
        const addressSelectedIndex = adresses.indexOf(Object(addressSelected));

        adresses.splice(addressSelectedIndex, 1);

        navigate('/')

    }

    function selectThisCard(address: object) {
        const addressSelected = adresses.find(addressList => addressList == address);
        const addressSelectedIndex = adresses.indexOf(Object(addressSelected));
        
        localStorage.setItem('index', String(addressSelectedIndex));
        localStorage.setItem('type', addressSelected!.type);
        localStorage.setItem('name', addressSelected!.name);
        localStorage.setItem('zip', addressSelected!.zip);
        localStorage.setItem('address', addressSelected!.address);
    }
    
    useEffect(() => {
        
    })

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
                    {adresses.slice().reverse().map(address => (
                        <AddressCard key={address.address} title={`Endereço ${address.name}`} className={address.zip == '0g025398jJI#55jJKjjjs%' && adresses.length == 1 ? 'messageCard' : address.zip == '0g025398jJI#55jJKjjjs%' && adresses.length > 1 ? 'hideThisElement' : ''}>
                            <h2>Nenhum endereço ainda...<i className="fas fa-map-marked-alt"></i></h2>
                            <div className='address-box'>
                                <div>
                                    <h1>{address.name}</h1>
                                    <Link to="/edit">
                                    <i onClick={() => {
                                        selectThisCard(address);
                                        }} className="fas fa-pencil-alt" title='Editar endereço'></i>
                                    </Link>
                                    <i className="fas fa-trash" title='Deletar endereço' onClick={() => deleteThisCard(address)}></i>
                                </div>
                                <p>{address.address}</p>
                            </div>
                            <div className='address-type-box'>
                                <AddressType 
                                className='active'
                                title='Endereço Principal'>{address.type}</AddressType>
                            </div>
                        </AddressCard>
                    ))}
                    <Button title='Mostrar mais endereços'>Carregar Mais</Button>
                </AddressContainer>
            </Main>
        </Fragment>
    )
}

