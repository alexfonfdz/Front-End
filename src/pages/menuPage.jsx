import { useState } from 'react';
import './menuPage.css';
import Sidebar from '../../components/ResponsiveAppBar';

export default function MenuPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div style={{ padding: isSidebarOpen ? '25px 25px 25px 275px' : '25px' }}>
        <body style={{ background: '#f5f5f5' }}>
          <div className="wrapper" style={{ background: '#faf0d2', fontFamily: 'Allerta, sans-serif', fontSize: 24, borderTopStyle: 'none' }}>
            <div id="content" style={{ background: '#FAF0D2', borderTopWidth: 0, borderBottomWidth: 2, borderBottomColor: '#7c3271' }}>
              <div style={{ marginTop: 30, marginLeft: 30 }}>
                <h1 style={{ fontSize: 25, fontFamily: 'Allerta, sans-serif' }}>Expendio Bachoco</h1>
                <h1 style={{ fontFamily: 'Allerta, sans-serif', fontSize: 38 }}>EL POLLO MAX</h1>
              </div>
              <div>
                <div className="text-start d-lg-flex justify-content-lg-center align-items-lg-center" data-reflow-type="" style={{ marginTop: 100, marginLeft: 50 }}>
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
                </div>
              </div>
            </div>
            <div style={{ height: 45, marginTop: 200, marginLeft: 100 }}>
              <label className="form-label" style={{ fontFamily: 'Allerta, sans-serif', fontSize: 25, color: 'var(--bs-emphasis-color)' }}>Buscar:&nbsp;</label>
              <input type="search" style={{ background: '#faf0d2', width: 160 }} />
              <div>
                <ul className="list-group">
                  <li className="list-group-item d-xl-flex justify-content-xl-center" style={{ background: '#faf0d2', borderTopStyle: 'none', color: 'rgb(255,255,255)' }}>
                    <button className="btn btn-primary" type="button" style={{ background: '#7c3271', width: 270, height: 60, fontFamily: 'Allerta, sans-serif', fontSize: 24, borderTopStyle: 'none' }}>PRODUCTO 1</button>
                  </li>
                  <li className="list-group-item d-xl-flex justify-content-xl-center" style={{ background: '#faf0d2', borderTopStyle: 'none', color: 'rgb(255,255,255)' }}>
                    <button className="btn btn-primary" type="button" style={{ background: '#7c3271', width: 270, height: 60, fontFamily: 'Allerta, sans-serif', fontSize: 24, borderTopStyle: 'none' }}>PRODUCTO 2</button>
                  </li>
                  <li className="list-group-item d-xl-flex justify-content-xl-center" style={{ background: '#faf0d2', borderTopStyle: 'none', color: 'rgb(255,255,255)' }}>
                    <button className="btn btn-primary" type="button" style={{ background: '#7c3271', width: 270, height: 60, fontFamily: 'Allerta, sans-serif', fontSize: 24, borderTopStyle: 'none' }}>PRODUCTO 3</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </body>
      </div>
    </div>
  );
}
