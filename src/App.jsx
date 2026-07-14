import { HashRouter, Routes, Route } from 'react-router-dom'

{ /* Other Page Imports */ }
import Layout from './components/layout.jsx'
import Home from './pages/home.jsx'
import Contact from "./pages/contact.jsx";
import Help from "./pages/help.jsx"
import About from "./pages/about.jsx";
import Expect from "./pages/expect.jsx";

function App() {
  return (
      <HashRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/expect" element={<Expect/>} />
                <Route path="/help" element={<Help />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
      </HashRouter>
  )
}

export default App