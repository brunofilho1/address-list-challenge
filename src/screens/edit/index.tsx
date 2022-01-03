import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AddressForm, Button, Header, Main } from '../../components/styles';

export default function EditAddressScreen() {
    return (
        <Fragment>
            <Header>
                <Link to="/">
                <div>
                    <i className="fas fa-chevron-left"></i>
                    <h1 title='Página de endereços'>Editar endereço</h1>
                </div>
                </Link>
            </Header>
            <Main>
                <AddressForm>
                    <h1>Informações</h1>
                    <select id="colorselector">
                        <option value="Principal">Principal</option>
                        <option value="Residencial">Residencial</option>
                        <option value="Comercial">Comercial</option>
                        <option value="Férias">Férias</option>
                    </select>
                    <input type="text" placeholder='Nome do Endereço' />
                    <input type="text" placeholder='CEP' />
                    <textarea rows={7} 
                    placeholder={`Rua Doutor Messut,\n339,\nVila Bastos,\nSanto André,\nSP`} />
                    <Button>Editar</Button>
                </AddressForm>    
            </Main>
        </Fragment>
    )
}