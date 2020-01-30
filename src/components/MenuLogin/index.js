import React, { useState } from 'react'

import { Container, Logo, ButtonMenu, Menu, Item, WrapMenu } from './style'

const name = 'Login'

const MenuLogin = () => {

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
                <ButtonMenu onClick={activator}>{name}</ButtonMenu>
            </WrapMenu>
        </Container>
    )
}

export default MenuLogin;