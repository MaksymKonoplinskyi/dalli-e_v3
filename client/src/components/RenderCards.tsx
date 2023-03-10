import React from "react"
import { ICard } from "../types/data"
import Card from "./Card"

interface IRenderCardsProps {
  items: ICard[]
}

const RenderCards: React.FC<IRenderCardsProps> = ({ items }) => {

  return (
    <>
      {items.map(card => (
        <Card key={card._id} {...card}/>
        )) }
    </>
  )
}

export default RenderCards
