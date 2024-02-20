import { useState } from 'react';
import './menuPage.css';
import Sidebar from '../../components/ResponsiveAppBar';

export default function MenuPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [color, setColor] = useState({
    color: 'rgba(117, 42, 116, 1)',
  })


  function handleMouseUp(){
    setColor({
      color: 'rgba(117, 42, 116, 1)',
    })
  }

  function handleMouseDown(){
    setColor({
      color: 'rgba(155, 80, 154, 1)',
    })
  }

  function handleHover(){
    setColor({
      color: 'rgba(155, 80, 154, 0.5)',
    })
  }

  return (
    <div className='d-flex' style={{background: '#faf0d2'}}>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div style={{ padding: isSidebarOpen ? '0px 0px 0px 275px' : '0px 25px 0px 25px' }}>
        <div className="wrapper" style={{ background: '#faf0d2', fontFamily: 'Allerta, sans-serif', fontSize: 22, borderTopStyle: 'none' }}>
          <div id="content" style={{ background: '#FAF0D2', borderTopWidth: 0, borderBottomWidth: 2, borderBottomColor: '#7c3271' }}>
            <div style={{ marginTop: 10, marginLeft: 30 }}>
              <h1 style={{ fontSize: 25, fontFamily: 'Allerta, sans-serif' }}>Expendio Bachoco</h1>
              <h1 style={{ fontFamily: 'Allerta, sans-serif', fontSize: 38 }}>EL POLLO MAX</h1>
            </div>
            <div className="d-flex justify-content-between" style={{ marginTop: 100, marginLeft: 50 }}>
              <div className="table-responsive" style={{ background: '#faf0d2' }}>
                <table className="table table-borderless">
                  <thead style={{ background: '#FAF0D2' }}>
                    <tr style={{ background: '#FAF0D2' }}>
                      <th style={{ background: '#faf0d2', fontSize: 25, paddingRight: 50, borderTopWidth: 0, borderBottomWidth: 2, borderBottomColor: '#7c3271', fontFamily: 'Allerta, sans-serif' }}>Producto</th>
                      <th style={{ background: '#faf0d2', fontSize: 25, marginRight: 0, paddingRight: 50, borderTopWidth: 0, borderBottomWidth: 2, borderBottomColor: '#7c3271', fontFamily: 'Allerta, sans-serif' }}>Cantidad</th>
                      <th style={{ background: '#faf0d2', fontSize: 25, width: 100, paddingRight: 50, borderTopWidth: 0, borderBottomWidth: 2, borderBottomColor: '#7c3271', fontFamily: 'Allerta, sans-serif' }}>P.U.</th>
                      <th style={{ background: '#faf0d2', fontSize: 25, marginRight: 0, paddingRight: 50, borderTopWidth: 0, borderBottomWidth: 2, borderBottomColor: '#7c3271', fontFamily: 'Allerta, sans-serif' }}>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ background: '#faf0d2', height: 10 }}></td>
                      <td style={{ background: '#faf0d2', height: 10 }}></td>
                      <td style={{ background: '#faf0d2', width: 100, height: 10 }}></td>
                      <td style={{ background: '#faf0d2', height: 10 }}></td>
                    </tr>
                    <tr>
                      <td style={{ background: '#faf0d2', borderBottomWidth: 0, fontFamily: 'Allerta, sans-serif', fontSize: 24 }}>Pollo</td>
                      <td style={{ background: '#faf0d2', borderBottomWidth: 0, fontFamily: 'Allerta, sans-serif', fontSize: 24 }}>1.809</td>
                      <td style={{ background: '#faf0d2', width: 100, borderBottomWidth: 0, fontFamily: 'Allerta, sans-serif', fontSize: 24 }}>$134.00</td>
                      <td style={{ background: '#faf0d2', borderBottomWidth: 0, fontFamily: 'Allerta, sans-serif', fontSize: 24 }}>$242.41</td>
                    </tr>
                    <tr>
                      <td style={{ background: '#FAF0D2' }}></td>
                      <td style={{ background: '#FAF0D2' }}></td>
                      <td style={{ background: '#FAF0D2' }}></td>
                      <td style={{ background: '#FAF0D2' }}></td>
                    </tr>
                    <tr>
                      <td style={{ background: '#faf0d2', borderTop: '2px solid #7c3271' }}></td>
                      <td style={{ background: '#faf0d2', borderTop: '2px solid #7c3271' }}></td>
                      <td style={{ background: '#faf0d2', fontFamily: 'Allerta, sans-serif', fontSize: 25, borderTop: '2px solid #7c3271' }}>Total</td>
                      <td style={{ background: '#faf0d2', fontFamily: 'Allerta, sans-serif', fontSize: 25, borderTop: '2px solid #7c3271' }}>$00.00</td>
                    </tr>
                    <tr>
                      <td style={{ background: '#faf0d2' }}></td>
                      <td style={{ background: '#faf0d2' }}></td>
                      <td style={{ background: '#faf0d2', fontFamily: 'Allerta, sans-serif', fontSize: 25 }}>Redondeo</td>
                      <td style={{ background: '#faf0d2', fontFamily: 'Allerta, sans-serif', fontSize: 25 }}>$00.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div style={{ marginLeft: 50 }}>
                <label className="form-label" style={{ fontFamily: 'Allerta, sans-serif', fontSize: 25, color: 'var(--bs-emphasis-color)', marginLeft: 20 }}>Buscar:&nbsp;</label>
                <input type="search" style={{ background: '#faf0d2', width: 160 }} />
                <div>
                  <ul className="list-group">
                    <li className="list-group-item d-xl-flex justify-content-xl-center" style={{ background: '#faf0d2', border: 'none', color: 'rgb(255,255,255)' }}>
                      <button className="btn btn-primary" type="button" style={{ width: 270, height: 60, fontFamily: 'Allerta, sans-serif', fontSize: 24, border: 'none', background: color.color, outline: 'none' }} onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} onMouseOver={handleHover} onMouseLeave={handleMouseUp}>PRODUCTO 1</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

