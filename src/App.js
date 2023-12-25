import './App.css';
import { Layout } from './layout/layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './layout/navbar';
import Footer from './layout/footer';
import SellItem from './sell-item/sell-item';
import SustainabilityAbout from './sustainability-about/sustainability-about';
import { createContext, useState } from 'react';

export const TestContext = createContext();

function App() {
  const [text, setText] = useState('');
  
  return (
    <div className="common-container" >
      <TestContext.Provider value={{text, setText}}>
        <Router>
          <section className='navbar px-4 py-3'>
            <Navbar />
          </section>

          <section className='main'>
            <Routes>
              <Route path='/' element={<Layout />}> </Route>
              <Route path='/sustainability' element={<SustainabilityAbout />}> </Route>
              <Route path='/about' element={<SustainabilityAbout />}> </Route>
              <Route path='/contact' element={<Layout />}> </Route>
              <Route path='/item/:id' element={<SellItem />}></Route>
            </Routes>

          </section>

          <section className='footer'>
            <Footer />
          </section>
        </Router>
      </TestContext.Provider>

    </div>
  );
}

export default App;
