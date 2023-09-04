import React from 'react';
import tw from '../assets/tw.png';
import fb from '../assets/fb.png';
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'

const Footer = () => {
    return(
        <div className='footer'>
            <h3><span>Delicious</span></h3>
            <div className='footerText'>
                <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis
                    magni eligendi fuga maxime saepe commodi placeat.</p>
                <div className='socialLinks'>
                    <img src={tw} className='socialMedia' alt='twitter' />
                    <img src={fb} className='socialMedia' alt='facebook' />
                    <img src={linkedin} className='linkedin' alt='linkedin' />
                    <img src={instagram} className='socialMedia' alt='instagram' />
                </div>
                <p className="copyright">Copyright &copy; Delicious.All right reserved</p>
                <p>Designed by <span>Olubisi</span></p>     
            </div>
            
        </div>
    )
}
export default Footer;

