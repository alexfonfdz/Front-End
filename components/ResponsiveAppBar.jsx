//Barra de navegación responsiva

import { Link } from 'react-router-dom';
// import { useState } from 'react';
import PropTypes from 'prop-types';
import useUser from '../src/useUser';
import './ResponsiveAppBar.css'; // Import your CSS file



export default function Sidebar({ isSidebarOpen, setIsSidebarOpen}){
    const { userInfo, handleLogout } = useUser();
    let pages = [];
    console.log(userInfo)
    const pageNames = ['Productos', 'Transacciones', 'Inventario', 'Reportes'];
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    if(userInfo.userTypeName === 'ADMINISTRADOR'){
      pages = ['admin-productos', 'transacciones', 'inventario', 'reportes'];
    }else{
      pages = ['productos'];
    }

    return (
        <div>
<div className="wrapper">
      <div id="mySidebar" className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}  style={{ background: "#fbd23a", height: '100%', width: '250px' }}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
            {isSidebarOpen ? '×' : '☰'}
        </button>
        <div className="sidebar-header">
          <img
            src="../src/assets/img/pollomaxlogo.jpg"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "30px",
              margin: "0px 0px 0px 30px"
            }}
            alt="Logo"
          />
        </div>
        <ul className="list-unstyled components" style={{ '--bs-primary': '#fbd23a', '--bs-primary-rgb': '251,210,58', background: '#fbd23a', borderColor: '#fbd23a' }}>
          <li style={{ color: 'var(--bs-emphasis-color)', fontSize: '20px', fontFamily: 'Allerta', fontWeight: 'bold' }}>
            <Link to="/menu">Menú</Link>
          </li>
          {pages.map((page, index) => (
              <li key={index} style={{ color: 'var(--bs-emphasis-color)', fontSize: '20px', fontFamily: 'Allerta', fontWeight: 'bold' }}>
                <Link to={`/${page}`}>{pageNames[index]}</Link>
              </li>
          ))}
          <div>
        <button className='close-session' onClick={handleLogout}>
            Cerrar sessión, {userInfo.username}
        </button>
    </div>
        </ul>
      </div>
    </div>
    <button className="sidebar-toggle" onClick={toggleSidebar}>
            {isSidebarOpen ? '×' : '☰'}
    </button>
    </div>


    );
    
}

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  setIsSidebarOpen: PropTypes.func.isRequired,
};

