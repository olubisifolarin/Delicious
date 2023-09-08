import React, {useState} from "react";
import AllMenu from '../constants/AllMenu'
import Menu from './Menu';

const Starter= () => {
    const [showStarter, setShowStarter] = useState(); 

    const handleStarterClick = () => {
        setShowStarter('show');
      };
      
      if (showStarter) {
        return <Menu />;
      }
    return(
        <div>
            
            <div className='tastyMenu'> 
                <h3>Check out tasty <span>Menu</span></h3>
                <button onClick={handleStarterClick} className='menuButton'>Show All</button>
                <button className='menuButton'>Starters</button>
            </div>

            <div className="flex flex-row starter">
                <AllMenu
                        name= {
                        <h6 className="crab">Tuncas Grilled..................................$1.20</h6>
                        }
                        text={
                        <p className="crab">Grilled chicken with provolone, artichoke hearts, and roasted red pesto</p>
                        }
                    />

                    <AllMenu
                        name={
                        <h6 className="crab">Greek Salad..........................................$20.3</h6>
                        }
                        text={
                        <p className="crab">Fresh spinach, crisp romaine, tomatoes, and Greek olives</p>
                        }
                    />
            </div>

            

                <AllMenu
                    name={
                    <h6 className="crab">Lobster Roll...........................................$8.14</h6>
                    }
                    text={<p className="crab">Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll</p>
                    }
                />
        </div>
      
    )
}

export default Starter