import React, {useState} from 'react';
import AllMenu from '../constants/AllMenu';
import Starter from './Starter';


const Menu = () => {
    const [showMenu, setShowMenu] = useState(); 

    const handleMenuClick = () => {
        setShowMenu('show');
      };
      
      if (showMenu) {
        return <Starter />;
      }
    return(
        <div>
            <section id='menu' style={{ paddingTop: '50px'}}>
            <div className='tastyMenu'> 
                <h3>Check out tasty <span>Menu</span></h3>
                <button className='menuButton'>Show All</button>
                <button onClick={handleMenuClick} className='menuButton'>Starters</button>
            </div>

            <div className='menu'>
                
                <AllMenu
                    name = {
                        <h6>Lobster Bisque.....................................$3.45</h6>
                        }
                    text={
                        <p>Lorem, deren, trataro, filede, nerada</p>
                    }
                />
                <AllMenu 
                    name={
                    <h6 className="crab">Crab Cake.........................................$8.72</h6>
                    }
                    text ={
                    <p className="crab">A delicate crab cake served on a toasted roll with lettuce and tartar sauce</p>
                    }
                />
                <AllMenu
                    name= {
                    <h6>Tuncas Grilled..................................$1.20</h6>
                    }
                    text={
                    <p>Grilled chicken with provolone, artichoke hearts, and roasted red pesto</p>
                    }
                />

                <AllMenu
                    name={
                    <h6>Greek Salad..........................................$20.3</h6>
                    }
                    text={
                    <p>Fresh spinach, crisp romaine, tomatoes, and Greek olives</p>
                    }
                />

                <AllMenu
                    name={
                    <h6>Lobster Roll...........................................$8.14</h6>
                    }
                    text={<p>Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll</p>
                    }
                />

                <AllMenu
                    name ={
                    <h6 className='spinach'>Spinach Salad......................................$42.5</h6>
                    } 
                    text= {<p className='spinach'>Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette</p>}
                />
                
            </div>
            </section>
           
           
            
            {showMenu === "" && <Starter />}
        </div>
    )
}
export default Menu;

