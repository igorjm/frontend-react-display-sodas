import React from 'react'
import { Card, Image } from 'semantic-ui-react'

import CurrencyFormat from 'react-currency-format';

import cocacola from '../assets/coca-cola.ico'
import fanta from '../assets/fanta.ico'
import guarana from '../assets/guarana.ico'
import pureza from '../assets/pureza.ico'
import soda from '../assets/soda.ico'
import sprite from '../assets/sprite.ico'

import LikeButton from './LikeButton'

const SodaCard = ({sodas: {marca, sabor, quantidade, valor, comprado, curtidas}}) => {

    function populateImage(sabor, marca) {
        var refrigerante;
        
        switch(sabor) {
            case "Coca-cola":
                refrigerante = cocacola
                break;
            case "Fanta":
                refrigerante = fanta
                break;
            case "Sprite":
            refrigerante = sprite
            break;
            case "Guaraná":
                if(marca === "Antartica")
                    refrigerante = guarana
                else
                    refrigerante = pureza
                break;
            case "Soda":
                refrigerante = soda
                break;
            default:
                console.log('Sorry, we are out of sodas');
                break;
        }
        return refrigerante
    }
    return (
        <Card fluid>
            <Card.Content>
                <Image floated='right' size='mini' src={populateImage(sabor, marca)} wrapped ui={false} />
                <Card.Header>Marca: {marca}</Card.Header>
                <Card.Meta>Sabor: {sabor}</Card.Meta>
                <Card.Meta>Tamanho: {quantidade}</Card.Meta>
                <Card.Description>
                    Valor: <CurrencyFormat value={valor} displayType={'text'} thousandSeparator={false} prefix={'R$'}/>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <LikeButton sodas={{ curtidas }}/>
            </Card.Content>
        </Card>
    )
}

export default SodaCard