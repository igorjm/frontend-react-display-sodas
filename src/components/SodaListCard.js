import React from 'react'

import SodaCard from './SodaCard'

const SodaListCard = (props, filtro) => {
    console.log('props', props.sodas)
    console.log('filtro', filtro)

    const values = []

    

    return (
        <>
            {filtro && filtro === "todos" ? (
                    <SodaCard 
                        sodas={props.sodas}
                        filtro={filtro}
                    />
                ) : (
                    <SodaCard 
                        sodas={props.sodas}
                        filtro={filtro}
                    />
                )}
            {/* <SodaCard 
                sodas={props.sodas}
                filtro={filtro}
            /> */}
            {/* <Card fluid>
                <Card.Content>
                    <Image floated='right' size='mini' src={populateImage(sabor, marca)} wrapped ui={false} />
                    <Card.Header>Marca: {marca}</Card.Header>
                    <Card.Meta>Sabor: {sabor}</Card.Meta>
                    <Card.Meta>Tamanho: {quantidade}</Card.Meta>
                    <Card.Description>
                        Valor: <CurrencyFormat value={valor} displayType={'text'} prefix={'R$'}/>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <LikeButton sodas={{ curtidas }}/>
                    {produtoComprado}
                </Card.Content>
            </Card> */}
        </>
    )
}

export default SodaListCard