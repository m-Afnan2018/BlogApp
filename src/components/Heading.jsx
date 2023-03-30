import React, { useContext } from 'react'
import dark from "../assets/dark-mode.png";
import light from "../assets/light-mode.png";
import { AppContext } from '../context/AppContext';

const Heading = () => {
  const {currTheme, changeTheme} = useContext(AppContext);
  return (
    <div className='heading'>
        <p>
            Afnan Blogs
        </p>
        <div className='changeTheme' onClick={changeTheme}>
          <img src={currTheme === 'light' ? light : dark} alt='theme' />
          <div className='glow'></div>
        </div>
    </div>
  )
}

export default Heading