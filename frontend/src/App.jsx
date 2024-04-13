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


function App() {
    return (
        <div className="App w-full">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/booking" element={<Booking/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
    );
}

export default App
