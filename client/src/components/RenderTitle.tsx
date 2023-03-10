import React, { useState, useEffect } from "react"
import { ICard } from "../types/data"
import Card from "./Card"
interface IRenderTitleProps {
  title: string
}
//data, title
const RenderTitle: React.FC<IRenderTitleProps> = props => {
  const { title } = props
  return (
    <h2 className='mt-5  font-bold text-[#6449ff] text-x1 uppercase'>
      {title}
    </h2>
  )
}

export default RenderTitle
