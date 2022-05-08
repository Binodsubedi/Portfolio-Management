import React from 'react'

interface propsIn{
    classNm:string
}

const Body = (props:propsIn) => {
  return (
    <div className={props.classNm}>Body</div>
  )
}

export default Body