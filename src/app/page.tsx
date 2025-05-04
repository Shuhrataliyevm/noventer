import React from 'react'
import '../ui/home.scss';
import Contents from '@/components/Contents/page';

const HomePage = () => {
  return (
    <div className="containers">
      <div className="home">
        <div className="home-text">
          <h1>Yuqori sifatdagi <br /> <span className='home-span-1'>aniqlikka asoslanib</span><br /><span className='home-span-2'>istalgan turdagi </span><br /><span className='home-span-3'>dasturlarni tayyorlaymiz</span></h1>
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
    </div>
  )
}
export default HomePage;