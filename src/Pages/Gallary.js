import React from 'react';
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import gallery5 from '../assets/gallery5.jpg';
import gallery6 from '../assets/gallery6.jpg';
import gallery7 from '../assets/gallery7.jpg';
import gallery8 from '../assets/gallery8.jpg';


const Gallery = () => {
    return(
        <div>
            <section id='gallery' style={{ paddingTop: '50px'}}>
                <div className='gallery'>
                    <h3>Some photos from<span> our Restaurant</span></h3>
                    <p>Ut possimus qui ut temporibus culpa 
                        velit eveniet modi omnis est adipisci
                        expedita at voluptas atque vitae autem.</p>
                </div>
                <div className='GallaryPhotos'>
                    <img src={gallery1} className='photos' alt='photos'/>
                    <img src={gallery2} className='photos' alt='photos'/>
                    <img src={gallery3} className='photos' alt='photos'/>
                    <img src={gallery4} className='photos' alt='photos'/>
                    <img src={gallery5} className='photos' alt='photos'/>
                    <img src={gallery6} className='photos' alt='photos'/>
                    <img src={gallery7} className='photos' alt='photos'/>
                    <img src={gallery8} className='photos' alt='photos'/>
                </div>
            </section>
            
        </div>
    )
}
export default Gallery;

