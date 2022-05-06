import React from 'react'

interface propsIn {
    classNm:string;
}

const Footer = (props:propsIn):JSX.Element => {
  return (
    <div className={props.classNm}>Footer</div>
  )
}

export default Footer