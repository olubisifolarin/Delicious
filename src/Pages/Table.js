import React from 'react';


const Table= () => {
    return(
        <div>
            <section id='table' style={{ paddingTop: '50px'}}>
            <div className='table'>
                <h3 className='' >Book a <span>Table</span></h3>
                <p>Ut possimus qui ut temporibus culpa velit eveniet modi 
                    omnis est adipisci expedita at voluptas atque vitae autem.</p>
            </div>
            <form className='Form'>
                <div>
                    <input type='text' name='text' placeholder='Name' required />
                    <input type='email' name='email' placeholder='Email' required />
                    <input type='number' name='number' placeholder='Phone Number' required />
                    <input type='date' name='date' placeholder='Date' required />
                    <input type='text' name='text' placeholder='Time' required />
                    <input type='text' name='text' placeholder='People' required />

                    <textarea className="textarea" placeholder='Message'></textarea><br />
                    <div className='tableButton'>
                        <button>Send Message</button>
                    </div>
                    
                </div>
                    
               
            </form>
            </section>
            
        </div>
    )
}
export default Table;

