import './App.css';
import { Layout } from './layout/layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './layout/navbar';
import Footer from './layout/footer';
import SellItem from './sell-item/sell-item';

function App() {
  return (
    <div className="common-container">
      <section className='navbar px-4 py-3'>
        <Navbar />
      </section>

      <section className='main'>
        <Router>
          <Routes>
            <Route path='/' element={<Layout />}> </Route>
            <Route path='/item/:id' element={<SellItem />}></Route>
          </Routes>
        </Router>
      </section>

      <section className='footer'>
        <Footer />
      </section>

    </div>
  );
}

export default App;
