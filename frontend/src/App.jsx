// This is the main component of our app. It will be the parent component of all other components.
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import Blog from './screens/Blog';
import Services from './screens/Services';
import Booking from './screens/Booking';
import Contact from './screens/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import backgroundImage from './assets/bg-image3.jpg';
import UtilityBar from "./components/UtilityBar.jsx";

function App() {
    return (
        <div className="App" style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: window.innerWidth <= 768 ? '100% 100%' : '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',

        }}>
            <UtilityBar/>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/booking" element={<Booking/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App
