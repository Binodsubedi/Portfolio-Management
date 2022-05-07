import React, { useEffect, useRef } from 'react'

interface propsIn {
    classNm:string;
}

const Home = (props:propsIn):JSX.Element => {

  const heading1 = useRef<HTMLHeadingElement>(null);
  const heading2 = useRef<HTMLHeadingElement>(null);
  const wholeContainer = useRef<HTMLDivElement>(null);


  useEffect(()=>{

    if(heading1 && heading1.current){
      
      heading1.current.classList.add("h1-active");
    }



    heading2.current?.classList.add("h1-active");
    wholeContainer.current?.classList.add("home__box-container-active");
  

  },[])

  return (
    <div className={props.classNm}>
      <div className='home__box-containers' ref={wholeContainer}>
        <div className="home__box-containers--inner1"><h1 ref={heading1}>Record Better</h1></div>
        <div className="home__box-containers--inner2"><h1 ref={heading2}>Break New Records</h1></div>
      </div>
    </div>
  )
}

export default Home