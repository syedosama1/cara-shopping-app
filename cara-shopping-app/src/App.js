import './App.css';
import NavBar from './components/NavBar';
import SimpleSlider from './components/HeroCarousel';
import HeroSection from './components/HeroSection';
import Ingridients from './components/Ingridients';
import JournalSection from './components/JournalSection';
import BsText from './components/BsText';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import SinglePage from "./components/SinglePage";
import JournalPage from "./components/JournalPage";
import FollowONIG from './components/FollowONIG';
import Products from './components/Products';
import CartHold from './components/CartHold';
import Under20 from './components/Under20';
import Under10 from './components/Under10';
import ForHer from './components/ForHer';
import ForHim from './components/ForHim';
import MobileNav from './components/MobileNav';

function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <Routes >
          <Route path='/' exact element={<>   <NavBar /> <MobileNav />  <SimpleSlider />  <HeroSection />  <BsText />  {<Products />}  {/*<OurBestSellers />*/}  <Ingridients />  <JournalSection /> <FollowONIG />  </>} />
          <Route path='/:id' exact element={<> <NavBar /> <MobileNav />  <SinglePage /> </>} />
          <Route path='/journal/april' element={<> <NavBar /> <MobileNav />  <JournalPage /> </>} />
          <Route path='/cart' exact element={<>  <NavBar /> <CartHold /></>} />
          <Route path='/under20' element={<> <NavBar />  <Under20 /> </>} />
          <Route path='/under40' element={<> <NavBar />  <Under10 /> </>} />
          <Route path='/forher' element={<> <NavBar />  <ForHer /> </>} />
          <Route path='/forhim' element={<> <NavBar />  <ForHim /> </>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
