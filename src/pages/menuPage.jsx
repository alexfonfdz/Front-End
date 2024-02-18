import { useState } from 'react';
import './menuPage.css';
import Sidebar from '../../components/ResponsiveAppBar';

export default function MenuPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    <div style={{padding: isSidebarOpen ? '25px 25px 25px 275px' : '25px'}}>
      <h1>Menu</h1>
      <p>Menu page content</p>
    </div>
    </div>
  );
}
