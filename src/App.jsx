import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AgeOfEmpires } from './components/AgeOfEmpires';
import { Assassins } from './components/Assassins';
import { Halo } from './components/Halo';
import { Humankind } from './components/Humankind';
import { JurassicWorld } from './components/JurassicWorld';
import { Navigation } from './components/Navigation';



function App() {


  return (
    <>
      <BrowserRouter>
        <div>
          <h1 id="title" className='text-center my-3'>Juegos de GamePass</h1>
        </div>
        <div id='main-img-container' className='container'>
          <Routes>
            <Route path="/ageofempires" element={<AgeOfEmpires className='image-size'/>} />
            <Route path="/assassins" element={<Assassins className='image-size'/>} />
            <Route path="/halo" element={<Halo className='image-size'/>} />
            <Route path="/humankind" element={<Humankind className='image-size'/>} />
            <Route path="/jurassicworld" element={<JurassicWorld className='image-size'/>} />
          </Routes>
        </div>
        <div className='container'>
          <Navigation />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
