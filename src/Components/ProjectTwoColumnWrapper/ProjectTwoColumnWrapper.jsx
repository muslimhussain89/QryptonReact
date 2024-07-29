import React from 'react'
import Text from '../Text/Text'
import "./ProjectTwoColumnWrapper.css"
export default function ProjectTwoColumnWrapper({TextCol1, TextCol2}) {
  return (
    <div className='ProjectTwoColumnWrapper'>
        <div className="ProjectHeadCol1">
          <Text text={TextCol1} FontSize={"3rem"} FontWeight={"700"} />
        </div>
        <div className="ProjectTextCol2">
          <Text text={TextCol2} FontSize={"2.8rem"} />
        </div>
    </div>
  )
}
