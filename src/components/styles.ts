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

    & h1 {
        cursor: pointer;
        font-size: 24px;
        color: #4F46BB;
    }

`

export const Main = styled.main`
    width: 100%;
    height: calc(100vh - 122px);
    background-color: #F8F7FC;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const SearchDiv = styled.div`
    width: 1000px;
    display: flex;
    align-items: center;
    justify-content: left;
    margin: 0 auto;

    & i {
        position: fixed;
        color: gray;
        margin-left: 10px;
    }

    & input {
        border: 0;
        padding: 10px 40px;
        width: 100%;
        border-bottom: 1px solid gray;
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