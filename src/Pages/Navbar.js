import React, {useState} from 'react';
import { HashLink } from 'react-router-hash-link';
import { FiMenu, FiX } from 'react-icons/fi';
import About from './About';
import Specials from './Specials';
import Gallery from './Gallary';
import Menu from './Menu';
import Table from './Table';
import Testimonial from '../constants/Testimonial';
import Contact from './Contact';
import Footer from './Footer';


const Navbar = () => {
    const [open, setOpen] = useState()
    const handleClick  = () =>{
        setOpen(!open);
    }
    const closeMenu = () => {
        setOpen(false);
    }

    return(
        <div className='navImg'>
            <div className='bgLogo'>
                <HashLink smooth to="/#home" className="nav-logo">
                    <h2>Delicious</h2>
                </HashLink>

                <div onClick={handleClick} className="nav-icon">
                    {open ? <FiX /> : <FiMenu />}
                </div>

                <ul className={open ? 'nav-links active' : 'nav-links'}>
                    <li className="nav-item">
                        <HashLink smooth to="/#home" className="nav-link" onClick={closeMenu}>
                            Home
                        </HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink smooth to="/#about" className="nav-link" onClick={closeMenu}> 
                           About
                        </HashLink>
                        
                    </li>
                    <li className="nav-item">
                        <HashLink smooth to="/#special" className="nav-link" onClick={closeMenu}>
                            Specials
                        </HashLink>
                    </li>
                    <li className="nav-item">
                       <HashLink smooth to='/#menu'className="nav-link" onClick={closeMenu}>
                            Menu
                        </HashLink>
                    </li>
                    <li className="nav-item">
                       <HashLink smooth to='/#gallery'className="nav-link" onClick={closeMenu}>
                            Gallery
                        </HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink smooth to="/#contact" className="nav-link" onClick={closeMenu}>
                            Contact
                        </HashLink>
                    </li>
                    <HashLink smooth to="/#table"><button className='btn'>Book  a table</button>
                    </HashLink>
                </ul>
    
            </div>

        <section id='home' style={{ paddingTop: '120px' }}>
            <div className='delicious'>
                <h2 className=''><span>Delicious</span> Restaurant</h2>
                <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> 
                    Optio officiis dolore rem ipsum dolorem tenetur aperiam iure vitae. <br />
                    Ex earum quae in odit, mollitia incidunt modi vitae nostrum voluptas eaque?    
                </p>
            
                    <HashLink smooth to ='/#menu'>
                        <button className='menuButton'>Our Menu</button>
                    </HashLink>
                    <HashLink smooth to ='/#table'>
                        <button className='menuButton'>Book a table</button>
                    </HashLink>
            </div> 
        </section>
            
            <About /> 
            <Menu /> 
            <Specials />
            <Gallery />
            <Table />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
       
    )
}

export default Navbar;