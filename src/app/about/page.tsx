import React from 'react'
import "../../ui/about.scss";
import News from '@/components/News/page';
const About = () => {
    return (
        <div>
            <div className="conatainers">
                <div className="tesktop">
                    <div className="tesctoop-tex">
                        <h1>Har bir xizmat turini <br /> <span className='about-span1'>har bir mijoz uchun</span> <br /><span  className='about-span2'>alohida ahamiyatli</span> <br /> <span  className='about-span3'>deb yondoshamiz !</span> </h1>
                    </div>
                    <div className="tesctop-image">
                        <img src="/icons/tesktopimg.svg" alt="#" />
                    </div>
                </div>
            </div>
            <News />
        </div>
    )
}

export default About;