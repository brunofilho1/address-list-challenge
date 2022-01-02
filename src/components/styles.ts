import styled from 'styled-components';

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

`

export const Main = styled.main`
    width: 100%;
    height: calc(100vh - 128px);
    background-color: #F8F7FC;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const SearchDiv = styled.div`
    width: 1000px;
    display: flex;
    align-items: center;
    justify-content: left;
    margin: 0 auto;

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
`;