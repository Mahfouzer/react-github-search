import React from 'react'
import Card from '../Card'
import CardsContainer from '../styled/CardsContainer'
import H1 from '../styled/H1'
import HorizontalCenteredContainer from '../styled/HorizontalCenteredContainer'

export default function CardSet({ cardsData }: { cardsData: { [x: string]: any }[] }) {

    if (!cardsData.length) {
        return <HorizontalCenteredContainer >
            <H1>No available Data</H1>
        </HorizontalCenteredContainer>
    }

    return (
        <CardsContainer>
            {cardsData.length && cardsData.map((cardData: { [x: string]: any }) => (<Card key={cardData.id} cardData={cardData} />))}
        </CardsContainer>
    )
}
