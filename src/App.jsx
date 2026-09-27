import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Institucion from './pages/Institucion'
import Programas from './pages/Programas'
import Inscripciones from './pages/Inscripciones'
import Blog from './pages/Blog'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="institucion" element={<Institucion />} />
        <Route path="programas" element={<Programas />} />
        <Route path="inscripciones" element={<Inscripciones />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
