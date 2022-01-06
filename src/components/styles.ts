import styled from 'styled-components';

/******** Components ********/

export const Header = styled.header`
    width: 100%;
    height: 40px;
    padding: 40px 20%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: #fff;

    a {
        text-decoration: none;
    }

    div { 
        display: flex;
        align-items: center;
        gap: 20px;
        transition: all .3s;

        &:hover {
            gap: 17px;
        }

        i {
            color: #4F46BB;
        }
    }

    h1 {
        cursor: pointer;
        font-size: 24px;
        color: #4F46BB;
    }

    @media screen and (max-width: 1100px) {
        & {
            padding: 40px 5%;
        }
    }
    @media screen and (max-width: 700px) {
        & {
            padding: 40px 5%;
        }
    }

`

export const Main = styled.main`
    width: 100%;
    height: calc(100vh - 128px);
    background-color: #F8F7FC;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`

export const Button = styled.button`
    padding: 5px 30px;
    background-color: #4F46BB;
    border: 0;
    border-radius: 100px;
    color: white;
    cursor: pointer;
    transition: .2s;

        &:hover {
            background-color: #3d3691;
        }
`;

/******** Components ********/


/******** Home Page ********/

export const SearchDiv = styled.div`
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: left;
    margin: 0 auto;
    padding: 0px 10px;

    & i {
        position: absolute;
        color: #BBB8D9;
        margin-left: 10px;
    }

    & input {
        border: 0;
        padding: 15px 40px;
        width: 100%;
        border-bottom: 2px solid #BBB8D9;
        outline: none;
        background-color: transparent;
    }
`

export const AddressType = styled.button`
    padding: 5px 30px;
    background-color: transparent;
    border: 1px solid #4F46BB;
    border-radius: 100px;
    cursor: pointer;
    transition: .2s;

    &.active {
        background-color: #e0d9ff;
        border: 0;
    }
`;

export const AddressContainer = styled.div`
    width: 1000px;
    margin: 0 auto;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    > button {
        width: 191px;
        padding: 10px 40px;
        margin: 0 auto;
    }

    h2, > i {
        display: none;
    }

    .hideThisElement {
        display: none;

    } .messageCard {
        h2 {
            display: flex;
            visibility: visible;
            margin: 0 auto;
            align-items: center;
            gap: 30px;

            i {
                color: #4F46BB;
            }
            
        }

        div div i {
            display: block;
            visibility: visible;
        }

        .address-type-box, div, p {
            display: none;
        }
    }
`;
export const AddressCard = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 32px;

    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(48, 46, 69, 0.06);
    border-radius: 8px;
    
    .address-type-box {
        display: flex;
        gap: 10px;
    }

    div div {
        display: flex;
        align-items: center;
        margin-bottom: 16px;

        h1 {
            font-size: 20px;
            margin-right: 10px;
        }

        i {
            font-size: 18px;
            padding: 8px;
            margin-right: 5px;
            color: #4F46BB;
            cursor: pointer;
        }
    }

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        color: #6D6C7B;
    }

    @media screen and (max-width: 450px) {
        & {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
            margin: 10px;
            
            .address-type-box {
                display: block;
            }

            div div {
                margin-bottom: 0px;
            }
        }
    }
`;

/******** Home Page ********/


/******** New/Edit Address Page ********/

export const AddressForm = styled.div`
    width: 622px;
    height: 606px;
    background-color: #fff;
    border-radius: 8px;

    padding: 60px 30px;
    margin: 0 auto;
    margin-top: 100px;

    display: flex;
    flex-direction: column;
    gap: 30px;

    h1 {
        font-size: 18px;
    }

    select, input, textarea {
        background-color: transparent;
        border: 0;
        border-bottom: 2px solid #BBB8D9;
        padding: 10px 0px;
        outline: 0;
        resize: none;

        font-size: 16px;
        color: #302E45;
    }

    select option {
        background-color: transparent;
    }

    button {
        width: 159px;
        height: 36px;
        margin: 0 auto;
    }

    @media screen and (max-height: 915px) {
        & {
            margin-top: 30px;
        }
    }
    @media screen and (max-width: 700px) {
        & {
            width: 322px;
        }
    }
`;

/******** New/Edit Address Page ********/