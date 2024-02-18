//Barra de navegación responsiva

import { Link } from 'react-router-dom';
import { useState } from 'react';
import useUser from '../src/useUser';
import './ResponsiveAppBar.css'; // Import your CSS file



function Sidebar(){
    const { userInfo, handleLogout } = useUser();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

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
            <Link to="/login">Menú</Link>
          </li>
          <li style={{ color: 'var(--bs-emphasis-color)', fontSize: '20px', fontFamily: 'Allerta', fontWeight: 'bold' }}>
            <Link to="#">Productos</Link>
          </li>
          <li style={{ color: 'var(--bs-emphasis-color)', fontSize: '20px', fontFamily: 'Allerta', fontWeight: 'bold' }}>
            <Link to="#">Transacciones</Link>
          </li>
          <li style={{ color: 'var(--bs-emphasis-color)', fontSize: '20px', fontFamily: 'Allerta', fontWeight: 'bold' }}>
            <Link to="#">Inventario</Link>
          </li>
          <li style={{ color: 'var(--bs-emphasis-color)', fontSize: '20px', fontFamily: 'Allerta', fontWeight: 'bold' }}>
            <Link to="#">Reportes</Link>
          </li>
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

export default Sidebar;
