import React, {useState} from 'react'

import { Container } from '../Historic/style';
import { Input, Icon, ResultBar, Item, WrapSearch, Border } from './style';

import lupa from '../../assets/imgs/lupa.png'
import { useEffect } from 'react';
import axios from 'axios'

const obj = [
    {result:'legal1'},
    {result:'legal2'},
    {result:'legal3'},
    {result:'legal4'},
    {result:'teste1'},
    {result:'teste2'},
    {result:'teste3'},
    {result:'teste4'},
]

const SearchBar = () => {

    const [search, setSearch] = useState('')
    const [activateSearch, setActivateSearch] = useState(false)

    const CheckActivated = () => {
        if (search === '') {
            setActivateSearch (false)
        }
        else {
            setActivateSearch (true)
        }
    }

    useEffect(() => {
        CheckActivated()
    }, [search]);
    
    const HandleChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <Container style={{flexDirection: 'column'}}>
            <WrapSearch>
                <Input onChange={HandleChange}/>
                <Icon src={lupa}/> 
            </WrapSearch>
            <ResultBar activateSearch={activateSearch}>
                {obj.map((item, index, array)=>{
                    return (
                        <>
                            <Item>{item.result}</Item>
                            <Border/>
                        </>
                    )
                })}
            </ResultBar>
        </Container>
    )
}

export default SearchBar;