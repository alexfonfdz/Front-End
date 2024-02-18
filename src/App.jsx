import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage";
import MenuPage from "./pages/menuPage";
import { UserProvider } from "./UserProvider";


function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <>
            {/* Para todos */}
            <Route path="/menu" element={<MenuPage />} />

            {/* Solo para usuarios */}
            <Route path="/productos" element={<MenuPage />} />

            {/* Solo para admin */}
            <Route path="/admin-productos" element={<MenuPage />} />
            <Route path="/transacciones" element={<MenuPage />} />
            <Route path="/inventario" element={<MenuPage />} />
            <Route path="/reportes" element={<MenuPage />} /> 

        <Route path="/" element={<Login />} />
        </>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
