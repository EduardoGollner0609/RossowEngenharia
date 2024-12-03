import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Page from './routes/Page'
import HomePage from './routes/Page/HomePage'
import ServicePage from './routes/Page/ServicePage'
import ContactPage from './routes/Page/ContactPage'
import AboutUsPage from './routes/Page/AboutUsPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<HomePage />} />
          <Route path="/servicos" element={<ServicePage />} />
          <Route path="/sobre" element={<AboutUsPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
