import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Page from './routes/Page'
import HomePage from './routes/Page/HomePage'
import ServicePage from './routes/Page/ServicePage'
import AboutUsPage from './routes/AboutUsPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<HomePage />} />
          <Route path="/servicos" element={<ServicePage />} />
          <Route path="/sobre" element={<AboutUsPage />} />
        </Route>

      </Routes>


    </BrowserRouter>
  )
}

export default App
