import React, { useState, useEffect } from "react"
import { ICard } from "../types/data"
import Card from "./Card"
interface IRenderCardsProps {
  items: ICard[]
}
//data, title
const RenderCards: React.FC<IRenderCardsProps> = ({ items }) => {
  // const { items } = props
  return items.map(card => <Card key={card._id} {...card} />)
}

export default RenderCards
