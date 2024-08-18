import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const [searchVisible, setSearchVisible] = useState(false); // إضافة حالة جديدة
  const { getTotalCartAmount, getCartItemCount } = useContext(StoreContext);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="image" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
        <a href='#download-app' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile App</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <div className={`search-container ${searchVisible ? 'active' : ''}`}>
          <input type="text" className="search-input" placeholder="Type here..." />
          <img src={assets.search_icon} alt="search" className="search-icon" onClick={toggleSearch} />
        </div>
        <div className="navbar-cart-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}>
            <p>
            {getCartItemCount() > 0 && <span>{getCartItemCount()}</span>}
            </p>
          </div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
