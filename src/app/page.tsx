'use client';
import React, { useEffect, useState } from 'react';
import '../ui/home.scss';
import Contents from '@/components/Contents/page';
import Projects from '@/components/Projects/page';
import Services from '@/components/Services/page';

const HomePage = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="containers">
      <div className="home">
        <div className="home-text">
          <h1>Yuqori sifatdagi <br /> 
            <span className='home-span-1'>aniqlikka asoslanib</span><br />
            <span className='home-span-2'>istalgan turdagi </span><br />
            <span className='home-span-3'>dasturlarni tayyorlaymiz</span>
          </h1>
          <button>Xizmatlar haqida</button>
        </div>
        <div className="home-img">
          <img src="/icons/mycomputer.svg" alt="#" />
        </div>
      </div>

      <Contents />

      <div className="clent">
        <div className="clent-text">
          <h1>Biz haqimizda</h1>
          <p>Qisqacha ma’lumot</p>
        </div>
      </div>

      <div className="newcards">
        <div className="cards-wrapper">
          <div className="card">
            <div className="image-wrapper">
              <img src="/icons/card_1.svg" alt="Card image" />
            </div>
            <div className="text-content">
              <h3>Boshlanishi</h3>
              <p>Biz - - - dan ish boshladik va <br /> - - - - larni oldimizga maqsad qilib qo‘ydik</p>
            </div>
          </div>

          <div className="card">
            <div className="image-wrapper">
              <img src="/icons/card_2.svg" alt="Card image" />
            </div>
            <div className="text-content">
              <h3>Uzoq muddatli loyihalar</h3>
              <p>Tajribamiz davomida umumiy <br /> hisobda - - loyiha uchun <br /> -- - muddatda ishlab topshirdik</p>
            </div>
          </div>

          <div className="card">
            <div className="image-wrapper">
              <img src="/icons/card_3.svg" alt="Card image" />
            </div>
            <div className="text-content">
              <h3>Jamoamiz kengaymoqda</h3>
              <p>Jamoamiz safi esa tobora kengaymoqda. Boshida - kishidan boshlangan faoliyatimiz hozirda -- kishi bilan davom etmoqda</p>
            </div>
          </div>
        </div>

        <div className="card-text">
          <p>
            Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak. <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </p>
        </div>

        <div className="new">
          <img src="/images/n1.png" alt="#" />
        </div>
        <div className="news">
          <img src="/images/n2.png" alt="#" />
        </div>
      </div>

      <Projects />
      <Services />

      {/* Back to Top Button */}
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          ↑
        </button>
      )}
    </div>
  );
};

export default HomePage;
