import React from 'react'
import CardWrapper from '../styled/CardWrapper'
import CardDescription from '../styled/CardDescription'
import CardInfo from '../styled/CardInfo'
import CardTitle from '../styled/CardTitle'

export default function Card({ cardData }: { [x: string]: any }) {

    return (
        <CardWrapper>
            <CardTitle>{cardData.name}</CardTitle>
            <CardDescription> {cardData.description}</CardDescription>
            <CardInfo> <b>Forks:</b> {cardData.forks}   <b>Stars:</b> {cardData.stargazers_count} </CardInfo>
        </CardWrapper>
    )
}
