import React, { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AddressForm, Button, Header, Main } from '../../components/styles';
import api from '../../services/adresses.json';
var adresses = api.adresses;

export default function EditAddressScreen() {

    var navigate = useNavigate();

    function updateAddress() {

        var select = document.getElementById("addressType") as HTMLSelectElement;
        var addressType = select?.options[select.selectedIndex].value;
        var name = document.getElementById('name') as HTMLInputElement;
        var CEP = document.getElementById('CEP') as HTMLInputElement;
        var address = document.getElementById('address') as HTMLInputElement;

        const index = localStorage.getItem('index');
        var addressToEdit = adresses[Number(index)];

        addressToEdit.type = addressType;
        addressToEdit.name = name.value;
        addressToEdit.zip = CEP.value;
        addressToEdit.address = address.value;

        navigate('/');
        
    }

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
                    <select id="addressType">
                        <option value="Principal">Principal</option>
                        <option value="Residencial">Residencial</option>
                        <option value="Comercial">Comercial</option>
                        <option value="Férias">Férias</option>
                    </select>
                    <input id='name' type="text" placeholder='Nome do Endereço' defaultValue={localStorage.getItem('name') || ''}/>
                    <input id='CEP' type="text" placeholder='CEP' defaultValue={localStorage.getItem('zip') || ''}/>
                    <textarea rows={7}
                    id='address' 
                    placeholder={`Rua Doutor Messut,\n339,\nVila Bastos,\nSanto André,\nSP`} 
                    defaultValue={localStorage.getItem('address') || ''} />
                    <Button onClick={updateAddress}>Editar</Button>
                </AddressForm>    
            </Main>
        </Fragment>
    )
}