import React from 'react'
import googlePlus from './../../images/logo/googlePlus.png';
import Insta from './../../images/logo/Instagram.png';
import linkedin from './../../images/logo/Linkedin.png';


interface propsIn {
    classNm:string;
}

const Footer = (props:propsIn):JSX.Element => {
  return (
    <div className={props.classNm}>
      <div className='footer__container'>

      <div className="footer__container-medias">
        <ul className='footer__container-medias--container'>
          <li className="footer__container-medias--container-1"><img src={googlePlus} alt="googleplus" /></li>
          <li className="footer__container-medias--container-2"><img src={Insta} alt="instagram" /></li>
          <li className="footer__container-medias--container-3"><img src={linkedin} alt="linkedin" /></li>
        </ul>
      </div>
      <div className="footer__container-copyRight"><h2>Copyright&copy;BinodSubedi</h2></div>
      </div>
    </div>
  )
}

export default Footer