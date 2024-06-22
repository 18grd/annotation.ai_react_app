import React from 'react';
import './DataEnhancement.css';
// import logo from './assets/logo-2-550x123-1.jpg';
import deImage from '../../assets/de.jpg';
import t2 from './t2.jpg';
import t1 from './t1.jpg';
import t3 from './t3.jpg';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/footer';

const DataEnhancement =()=>{

    return(
        <div >
            
           <div>

            <Navbar/>
           </div>
           <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div>

                
            <div className="imagesection" >
                <span>
                    <img src={deImage} alt="Image Description" />
                    </span>
                <p className="text-right">To processes used to enhance and improve raw data</p>
                <p className="text-right1">Data enhancement is a general term that refers to processes used to enhance, refine or otherwise improve raw data. Aggregate and arrange critical data and through research complete missing information, enhance competitive analysis.</p>
            </div>

            <div className="threeimagedes" >
                <div>
                    <h1>Data Enhancement</h1>
                    <img src={t1} alt="Image 1" className="threeimage" />
                </div>
                <div>
                    <h1>Data Verification</h1>
                    <img src={t2} alt="Image 2" className="threeimage" />
                </div>
                <div>
                    <h1>Data Extraction</h1>
                    <img src={t3} alt="Image 3" className="threeimage" />
                </div>
            </div>
            </div>
<Footer/>
        </div>
    );
};

export default DataEnhancement;