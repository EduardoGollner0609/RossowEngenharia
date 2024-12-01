import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Page from './routes/Page'
import HomePage from './routes/Page/HomePage'
import ServicePage from './routes/Page/ServicePage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<HomePage />} />
          <Route path="/serviços" element={<ServicePage />} />
        </Route>

      </Routes>


    </BrowserRouter>
  )
}

export default App
