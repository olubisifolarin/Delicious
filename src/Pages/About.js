import React from 'react';
import cake from '../assets/cake.jpg';
import Cards from '../constants/Cards';
import {BsCheck} from 'react-icons/bs';



const About = () => {
    return(
        
        <div>
            <section id='about' style={{ paddingTop: '50px' }}>
            <div className='about'>
                <div>
                    <img src={cake} className='cake' alt='cake'/>
                </div>
                
                <div className='lorem'>
                    <h3 className='eumipsam'>Eum ipsam laborum deleniti velit pariatur architecto aut nihil</h3>
                    <p className='loremMobile'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> 
                        Optio officiis dolore rem ipsum dolorem tenetur aperiam iure vitae.<br />
                        Ex earum quae in odit, mollitia incidunt modi vitae nostrum voluptas eaque?    
                    </p>
                
                    <p className='mt-3 loremMobile'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                        Optio officiis dolore rem ipsum dolorem tenetur aperiam iure vitae. <br /> 
                        Ex earum quae in odit, mollitia incidunt modi vitae nostrum voluptas eaque?    
                    </p>
                    <div>
                    <p className='flex flex-row mt-3 mb-3 text-black'><BsCheck className='check'/>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                    <p className='flex flex-row mb-3 text-black'><BsCheck className='check'/>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className='flex flex-row text-black'><BsCheck className='checking'/>Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
                    </div>
                    

                    <p className='mt-3'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                        Duis aute irure dolor in reprehenderit in voluptate velit esse <br />
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non <br />
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
            </div>

            <div>
                <div className='chooseRestaurant'>
                    <h3 className='whyChoose'>Why Choose <span>our Restaurant</span></h3>
                    <p>Ut possimus qui ut temporibus culpa velit 
                        eveniet modi omnis est adipisci expedita at 
                        voluptas atque vitae autem.</p>
                </div>
                
                <div className='Cards'>
                    <Cards 
                        number = {
                        <h4>01</h4>
                        }

                        name={
                            <h3>Lorem Ipsum</h3>
                        }

                        text={
                            <p>
                                Ulamco laboris nisi ut aliquip ex ea commodo consequat <br /> 
                                Et consectetur ducimus vero placeat
                            </p>
                        }
                     />

                    <Cards className=""
                        number = {
                        <h4>02</h4>
                        }

                        name={
                            <h3>Repellat Nihilh</h3>
                        }

                        text={
                            <p>
                                Dolorem est fugiat occaecati voluptate velit esse. <br /> 
                                Dicta veritatis dolor quod et vel dire leno para dest
                            </p>
                        }
                    />

                    <Cards
                        number = {
                        <h4>03</h4>
                        }

                        name={
                            <h3>Ad ad velit qui</h3>
                        }

                        text={
                            <p>
                               Molestiae officiis omnis illo asperiores.<br /> 
                               Aut doloribus vitae sunt debitis <br />
                               quo vel nam quis
                            </p>
                        }
                     />
                </div>

              
           
            </div>
                
        </section>
              
        </div>
    )


}

export default About;