import './menuPage.css';
import Sidebar from '../../components/ResponsiveAppBar';

function MenuPage() {
  return (
    <div>
        <Sidebar/>
    <div className="menuPage">
      <h1>Menu</h1>
      <p>Menu page content</p>
    </div>
    </div>
  );
}

export default MenuPage;