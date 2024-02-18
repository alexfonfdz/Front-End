import { useState } from 'react';
import './InventoryPage.css';
import Sidebar from '../../../components/ResponsiveAppBar';

export default function InventoryPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div style={{padding: isSidebarOpen ? '25px 25px 25px 275px' : '25px'}}>      
      <h1>Inventario</h1>
      <p>Inventario page content</p>
    </div>
    </div>
  );
}
