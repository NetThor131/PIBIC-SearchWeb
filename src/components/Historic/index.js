import React from 'react';
import { Container, List, Information, Text } from './style';

const obj = [
    {date:'22 janeiro', info:['Texto padrão']},
    {date:'23 janeiro', info:['Texto padrão', 'Texto padrão']},
    {date:'24 janeiro', info:['Texto padrão', 'Texto padrão', 'Texto padrão']},
    {date:'25 janeiro', info:['Texto padrão']},
    {date:'26 janeiro', info:['Texto padrão']},
    {date:'23 janeiro', info:['Texto padrão', 'Texto padrão']},
    {date:'23 janeiro', info:['Texto padrão', 'Texto padrão']},
    {date:'24 janeiro', info:['Texto padrão', 'Texto padrão', 'Texto padrão']},
    {date:'24 janeiro', info:['Texto padrão', 'Texto padrão', 'Texto padrão']},
    {date:'24 janeiro', info:['Texto padrão', 'Texto padrão', 'Texto padrão']},
    {date:'24 janeiro', info:['Texto padrão', 'Texto padrão', 'Texto padrão']},
]

const Historic = () => {

    return (
        <Container>
            <List>
                {obj.map((item) => {
                    return (
                        <>
                        <Text>{item.date}</Text>
                        {item.info.map((info)=>{
                            return (
                                <Information>
                                    <Text style={{fontWeight: 'normal', margin:'0'}}>{info}</Text>
                                </Information>
                        )})}
                        </>
                    )
                })}
            </List>
        </Container>
    )
}

export default Historic;