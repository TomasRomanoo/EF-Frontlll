import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./components/NavBar";
import Home from './routes/Home';
import Contact from './routes/Contact';
import Favs from './routes/Fav';
import Detail from './routes/Detail';
import GlobalElementsProvider from './context/GlobalElements';

function App() {
  return (
    <>
      <GlobalElementsProvider>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Contact' element={<Contact />} />
              <Route path='/Favs' element={<Favs />} />
              <Route path='/Dentis/:id' element={<Detail />} />
              <Route path='*' element={<div>Not Found</div>} />
            </Routes>
          <Footer/>
      </GlobalElementsProvider>
    </>
  )
}

export default App
