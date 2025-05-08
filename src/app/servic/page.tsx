import React from 'react'
import "../../ui/servic.scss";
import Projects from '@/components/Projects/page';
const Servic = () => {
    return (
        <div>
            <div className="conatainers">
                <div className="tesktop">
                    <div className="tesctoop-tex">
                        <h1>Tajribamiz davomida <br /> <span className='about-span1'>turli xil hajmdagi</span> <br /><span  className='about-span2'>IT loyihalarini  </span> <br /> <span  className='about-span3'>ishga tushira oldik</span> </h1>
                    </div>
                    <div className="tesctop-image">
                        <img src="/icons/tescktop2.svg" alt="#" />
                    </div>
                </div>
                <Projects />
            </div>
        </div>
    )
}

export default Servic;