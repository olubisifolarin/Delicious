import React, { useState } from 'react';
import { FaLocationArrow, FaClock} from 'react-icons/fa';
import { BiPhoneCall} from 'react-icons/bi';
import { AiOutlineMail} from 'react-icons/ai';


const Contact = () => {
    const [name, setName] =useState();
    const [email, setEmail] =useState();
    const [message, setMessage] =useState();
    const [subject, setSubject] =useState();

    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return(
        <div>
            <section id='contact' style={{ paddingTop: '50px'}}>
            <div className='contact'>
                <h3><span>Contact</span> Us</h3>
                <p>Ut possimus qui ut temporibus culpa velit eveniet 
                    modi omnis est adipisci expedita at voluptas atque vitae autem.    
                </p>
            </div>
            
            <div className='Contactmap'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus" 
                    title="My map"
                    className='map'
                    width="1400" 
                    height="400" 
                    style={{border:0, marginTop:30}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <form onSubmit={handleSubmit} className='ContactForm'>
                <div className='location flex flex row'>
                    <div className='mt-2 mb-6'>
                        <div className='flex flex row'>   
                            <FaLocationArrow  className='arrow'/>
                            <h6>Location</h6>
                        </div>
                        <p className='ml-14'>A108 Adam Street</p>
                        <p className='ml-14'>New York, NY 535022</p>
                    </div>

                    <div className='open mb-6'>
                        <div className='flex flex row'>   
                            <FaClock className='clock'/>
                            <h6>Open Hours</h6>
                        </div>
                        <p className='icon'>Monday-Saturday:</p>
                        <p className='icon'>11:00 AM - 2300 PM</p>
                    </div>

                    <div className='call mb-6'>
                        <div className='flex flex row'>   
                        <BiPhoneCall  className='phoneCall'/>
                        <h6>Call</h6>
                        </div>
                       
                        <p className='icon'>+1 5589 55488 51</p>
                        <p className='icon'>+1 5589 22475 14</p>
                    </div>

                    <div className='mail'>
                        <div className='flex flex row'>   
                        <AiOutlineMail className='email' />
                        <h6>Email</h6>
                        </div>
                        <p className='icon'>info@example.com</p>
                        <p className='icon'>contact@example.com</p>
                    </div>

                </div>
            
                <div className='name'>
                    <input type='text' name='text' placeholder='Name' required 
                    value={name}
                    onChange={(e) => {
                    setName(e.target.value);
                    }}
                    />

                    <input type='email' name='email' placeholder='Email' required
                    value={email}
                    onChange={(e) => {
                    setEmail(e.target.value);
                    }}
                    />

                </div>
                    <input type='text' name='text' className='subject' placeholder='Subject' required 
                    value={subject}
                    onChange={(e) => {
                    setSubject(e.target.value);
                    }}
                    />
                    <textarea className="ContactTextarea" placeholder='Message' 
                    value={message}
                    onChange={(e) => {
                    setMessage(e.target.value);
                    }}
                    /><br />
                    <div className='tableButton'>
                        <button>Send Message</button>
                    </div>
                    
            </form>
            </section>
            
        </div>
    )


}

export default Contact;