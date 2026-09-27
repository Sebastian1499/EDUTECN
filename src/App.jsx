import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Institucion from './pages/Institucion'
import Admisiones from './pages/Admisiones'
import Noticias from './pages/Noticias'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="institucion" element={<Institucion />} />
        <Route path="admisiones" element={<Admisiones />} />
        <Route path="noticias" element={<Noticias />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
