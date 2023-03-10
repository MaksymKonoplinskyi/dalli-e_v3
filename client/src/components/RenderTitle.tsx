import React from "react"

interface IRenderTitleProps {
  title: string
}

const RenderTitle: React.FC<IRenderTitleProps> = props => {
  const { title } = props
  return (
    <h2 className='mt-5  font-bold text-[#6449ff] text-x1 uppercase'>
      {title}
    </h2>
  )
}

export default RenderTitle
