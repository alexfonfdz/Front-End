import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './pages/LoginPage'
import Menu from './pages/menuPage'
import { UserProvider } from './UserProvider'
// import Sidebar from '../components/ResponsiveAppBar'


function App(){
  return(
    <>
    <BrowserRouter>
      <UserProvider>
          <Routes>
            {/* Para todos */}
            <Route path="/" Component={Login} />
            <Route path="/menu" Component={Menu} />

            {/* Para usuarios */}
            <Route path="/productos" Component={Login} />


            {/* Para administradores */}
            <Route path="/admin-productos" Component={Login} />
            <Route path="/transacciones" Component={Login} />
            <Route path="/inventario" Component={Login} />
            <Route path="/reportes" Component={Login} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
