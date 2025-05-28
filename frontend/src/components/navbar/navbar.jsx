import React, { useContext, useState } from 'react'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

function Navbar({setShowLogin}) {
  const[menu,setMenu]=useState("Home");
  const{gettotal,token,setToken}=useContext(StoreContext);
  const navigate=useNavigate();
  function logout(){
    localStorage.removeItem("token")
    setToken("");
    navigate("/");

  }
  
  return (
    <div className='navbar'>
     <Link to={'/'}> <img src="https://imgs.search.brave.com/yDwMAT0FtudXz8MnHgdnB-pldG4xjZrQkMryQbVV9QM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MTEvWm9tYXRvLUxv/Z28tNzAweDM5NC5w/bmc" alt="" className="logo" /></Link>
      <ul className="navbar-menue">
        <Link to={'/'} onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href="#explore-menu" onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href="#Appdownlod" onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
        <a href="#Footer"onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</a>
        </ul> 
        <div className="navbar-right">
        <img src="https://imgs.search.brave.com/vjJfmOJ3RXs04qasAwH7twTCWnkql1oLJw8QQEibnyQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzI1LzczLzY4/LzM2MF9GXzMyNTcz/Njg5N19seW91dWlD/a1dJNTlTWkFQR1BM/WjVPV1FqdzJHdzRx/WS5qcGc" alt="" className="logosearch" />
        <div className="nav-search-icon">
         <Link to={'/cart'} ><img src="https://imgs.search.brave.com/M-1a5eAPqrIdNRP1rI8gKozrIm53MTYvS5lBvOTJJlM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzkzLzQyLzgz/LzM2MF9GXzk5MzQy/ODM5N183a2hrYWVP/ZHBrSzJxRll5amcw/MUR3SHI1QkpDNXE5/Ri5qcGc" alt="" className="logocart" /></Link>
         
          <div className={gettotal()===0?"":"dot"}></div>
</div>
{!token?
 <button 
        onClick={() => setShowLogin(true)}  // Now this will work
        className="sign-in-btn"
      >
        Sign in
      </button>:<div className='nav-bar-profile'>
        <img src="https://imgs.search.brave.com/N0-Wwaz3HqE7S_5N5jKEVeWP9_qrggk0rIN0f-SyBUA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vczB6T2Jt/SS1wSmh3VGpXTE1E/OW9JR2x0SWp4a3dp/VlNZWHUxWHBTLWNO/VS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkw/TXk1bS9kR05rYmk1/dVpYUXZhbkJuL0x6/RXhMemt4THpZNUx6/WTQvTHpNMk1GOUdY/ekV4T1RFMi9PVFk0/TnpGZmNYbDRVa1I2/L2FXSjVkMmh3YWtS/bFR6ZGwvTXpNNFUz/RlNPRXRoTVVwYS9S/elF1YW5Cbg.jpeg" alt="" />
        <ul className="nav-bar-pro-dropdown">
          <li onClick={()=>navigate('/myorders')}> <img src="https://imgs.search.brave.com/HqyfG1Z6IVAbQU6ssBK9SlqPTYQ-JLbfxwIZ0AStCBo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vTWNkcFZX/YzAzeGdSZUhGZkEw/Q1d1bnQyNnlLTGhm/T0ZHUDNCbGdxLW91/QS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlq/Wkc0dC9hV052Ym5N/dGNHNW5MbVp5L1pX/VndhV3N1WTI5dEx6/STEvTmk4ek5UQXlM/ek0xTURJMi9PVFl1/Y0c1blAzTmxiWFE5/L1lXbHpYMmg1WW5K/cFpB" alt="" /><p>Orders</p></li>
          <hr/>
           <li onClick={logout}><img src="https://imgs.search.brave.com/oLWuiJ0iPScveCdoh0P8PRtWKaLSY112g4VmZKwNkr0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vbDNKRG1J/enN5RkNtZ0Z3ZF9G/b1hVMnlOX3ppNHE5/NHkxMWlncXY3Mmd2/US9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkw/TXk1bS9kR05rYmk1/dVpYUXZhbkJuL0x6/QTFMelV5THpJMkx6/Z3cvTHpNMk1GOUdY/elUxTWpJMi9PREF6/TUY5U1UzWXpNR3R5/L1MzSklTVTVEYm5G/cFZFUlAvU2xsRFIz/RlZSWGxwWTBsVi9N/aTVxY0dj.jpeg" alt="" /><p>Logout</p></li>
        </ul>
      </div>
       
}
 
        </div>
    </div>
  )
}

export default Navbar