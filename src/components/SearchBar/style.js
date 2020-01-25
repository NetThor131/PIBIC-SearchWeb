import styled from 'styled-components';

export const Input = styled.input `
    background: #FFFFFF;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
    border-radius: 8px 0px 0px 8px;
    padding: 16px;
    width: 500px;
    border: none;
    font-size: 20px;
`

export const Icon = styled.img `
    background: #0A4E98;
    box-shadow: 2px 2px 2.5px rgba(0, 0, 0, 0.3);
    border-radius: 0px 8px 8px 0px;
    padding: 21px;
`

export const ResultBar = styled.div `
    background: #E7E7E7;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    border-radius: 0px 0px 8px 8px;
    display: ${props => props.activateSearch ? 'flex' : 'none' };
    flex-direction: column;
    height: auto;
    min-height: 30px;
    width: 587.8px;
    position: relative;
    top: -10px;
    padding: 20px 0px;
`

export const Item = styled.div `
    color: black;
    background: #DBDBDB;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    font-size: 1rem;
    line-height: 20px;
    font-style: normal;
    font-weight: normal;
    margin: 4px 20px;
    border-bottom: 1px solid #BBBBBB;
    padding: 15px;
`

export const Border = styled.div `
    height: 2px;
    margin: 10px 25px;
    background: #DBDBDB;
`

export const WrapSearch = styled.div `
    display: flex;
    z-index: 3;
`