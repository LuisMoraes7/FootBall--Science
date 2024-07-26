import styled from "styled-components";

export const Container = styled.main`
    margin-top: 40px;
    margin: auto;
    text-align: center;
    margin-bottom: 50px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding: 10px;
    background: white;
    width: 80vw;
    border-radius: 7px;
`

export const divMaster = styled.div`
    select{
        padding: 4px 10px;
        margin-left: 20px;
        //background-color: #284B63;
        border-radius: 10px;
        margin-bottom: 20px;
    }
`

export const closeButton = styled.button`
    background: #AB1616;
    color: white;
    padding: 12px 9px;
    display: flex;
    align-items: center;
    border-width: 0.5px;
    border-radius: 5px;
    height: 20px;

    &:hover{
        background-color: darkred;
    }

    &:active{
        background-color: #3C0000;
    }
    
`

export const SelectField = styled.div`
    display: flex;
    justify-content: space-evenly;
`