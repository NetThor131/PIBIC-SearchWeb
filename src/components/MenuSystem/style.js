import styled from 'styled-components';

export const Container = styled.div `
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    background: transparent;
`

export const Logo = styled.img `
    height: 20vh;
    margin: 10px 50px;
`

export const WrapMenu = styled.div `
    position: fixed;
    width: 100%;
    height: 208.19px;
    display: flex;
    justify-content: flex-end;
`

export const ButtonMenu = styled.button `
    margin: 25px 50px;
    background: linear-gradient(180deg, #00A127 0%, #008320 100%);
    box-shadow: 2px 2px 2.5px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    width: 160px;
    height: 40px;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
    outline: none;
    border: none;
    :active {
        transform: translateX(1px);
        transform: translateY(1px);
    }
    z-index: 2;
`

export const Menu = styled.div `
    display: ${props => props.activated ? 'none' : 'flex'};
    flex-direction: column;
    position: absolute;
    top: 55px;
    right: 53px;
    background: #DBDBDB;
    box-shadow: 2px 2px 2.5px rgba(0, 0, 0, 0.3);
    border-radius: 0px 0px 15px 15px;
    width: 155px;
    height: 100px;
    z-index: 1;
`

export const Item = styled.a `
    margin-top:20px;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    color: #000000;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    text-decoration: none;
`
