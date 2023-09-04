import React from 'react';
import specials1 from '../assets/specials1.jpg';



const Specials = () => {
    return(
        <div>
            <section id='special' style={{ paddingTop: '50px'}}>
            <div className='checkSpecial'>
                <h3>Check <span>our Specials</span></h3>
                <p>Ut possimus qui ut temporibus culpa velit eveniet modi
                    omnis est adipisci expedita at voluptas atque vitae autem.  
                </p>
            </div>
            
            <div className='special'>
                <div className='specialLorem'>
                    <h6 className='flex flex-grow pb-4'>Lorem</h6>
                    <h6 className='pb-5'>consectetur</h6>
                    <h6 className='pb-5'>Optio</h6>
                    <h6 className='pb-5'>tenetur</h6>
                    <h6>mollitia</h6>
                </div>
                <hr className='hrule' />
                
                <div className='flex flex-row architecttoPlate'>
                    <div className='architecto'>
                    
                    <h3 className=''>Architecto ut aperiam autem id</h3>
                    <p><i>Qui laudantium consequatur laborum sit qui ad sapiente <br />dila parde sonata raqer
                        a videna mareta paulona marka Et nobis maiores eius.</i><br /> 
                        Voluptatibus ut enim blanditiis atque harum sint. Laborum eos <b />
                        repellat minima eveniet eius et quis magni nihil. Consequatur <br />
                        dolorem quaerat quos qui similique accusamus</p>
                    </div>
                    <div>
                        <img src={specials1} className="plate" alt='plate' />
                    </div>
                </div>
               

                
            </div>
            </section>
            
           
        </div>
    )


}

export default Specials;