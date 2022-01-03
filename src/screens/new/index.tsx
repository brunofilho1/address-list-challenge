import React, { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Header, Main, AddressForm } from '../../components/styles';
import api from '../../services/adresses.json';
var adresses = api.adresses;


export default function NewAddressScreen() {

    var navigate = useNavigate();

    function registerAddress() {

        var select = document.getElementById("addressType") as HTMLSelectElement;
        var addressType = select?.options[select.selectedIndex].value;
        var name = document.getElementById('name') as HTMLInputElement;
        var CEP = document.getElementById('CEP') as HTMLInputElement;
        var address = document.getElementById('address') as HTMLInputElement;
    
        if(name.value && CEP.value && address.value) {
            adresses.push({
                "type": addressType,
                "name": name!.value,
                "zip": CEP!.value,
                "address": address!.value
            })
            navigate('/')
        } else {
            alert('Digite as informações no formulário!')
        }
    }

    return (
        <Fragment>
            <Header>
                <Link to="/">
                    <div>
                        <i className="fas fa-chevron-left"></i>
                        <h1 title='Página de endereços'>Cadastro de endereço</h1>
                    </div>
                </Link>
            </Header>
            <Main>
                <AddressForm>
                    <h1>Informações</h1>
                    <select id='addressType' required>
                        <option value="Principal">Principal</option>
                        <option value="Residencial">Residencial</option>
                        <option value="Comercial">Comercial</option>
                        <option value="Férias">Férias</option>
                    </select>
                    <input id='name' type="" placeholder='Nome do Endereço' required />
                    <input id='CEP' type="text" placeholder='CEP' required />
                    <textarea
                    id='address' 
                    rows={7} 
                    placeholder={`Rua Doutor Messut,\n339,\nVila Bastos,\nSanto André,\nSP`} 
                    required />
                    <Button onClick={registerAddress}>Cadastrar</Button>
                </AddressForm>    
            </Main>
        </Fragment>
    )
}