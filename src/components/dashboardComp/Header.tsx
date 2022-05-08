import React from 'react'
import { Link } from 'react-router-dom'

interface propsIn{
    classNm:string
}

const Header = (props:propsIn) => {
  return (
    <div className={props.classNm}>
      <div className='dashboardheader__searchBar'>
        
        <input type="text" placeholder='Search' />
        <button>Search</button>
        
      </div>
      <div className='dashboardheader__optionsContainer'>
        <ul className='dashboardheader__optionsContainer--links'>
          {/* <li>Dasahboard</li> */}
          {/* <li>Create</li> */}
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/create'>Create</Link>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  )
}

export default Header