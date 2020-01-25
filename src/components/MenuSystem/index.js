import React, { useState } from 'react'

import { Container, Logo, ButtonMenu, Menu, Item, WrapMenu } from './style'

const name = 'Neto'

const MenuSystem = () => {

    const [activateMenu, setActivateMenu] = useState(false)

    const activator = () => {
        setActivateMenu(!activateMenu);
    }

    const sair = () => {
        console.log('teste')
        window.location = window.origin;
    }

    return (
        <Container>
            <Logo src='http://divulgacoes.ufs.br/assets/logoUFS-5b7c1d387ab83d8c06b27e6943deddc28337984b1536cf0b2aad371d4db297a0.png' />
            <WrapMenu>
                <ButtonMenu onClick={activator}>Olá, {name}</ButtonMenu>
                <Menu activated={activateMenu}>
                    <Item href="/page8" style={{ borderBottom: '1px solid #BBBBBB', paddingBottom: '12px' }}>Histórico</Item>
                    <Item style={{ marginTop: '14px' }} onClick={sair}>Sair</Item>
                </Menu>
            </WrapMenu>
        </Container>
    )
}

export default MenuSystem;