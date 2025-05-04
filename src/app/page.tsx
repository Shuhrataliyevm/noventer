import React from 'react'
import '../ui/home.scss';

const HomePage = () => {
  return (
    <div className="home">
      <div className="home-text">
        <h1>Yuqori sifatdagi <br /> <span className='home-span-1'>aniqlikka asoslanib</span><br /><span className='home-span-2'>istalgan turdagi </span><br /><span className='home-span-3'>dasturlarni tayyorlaymiz</span></h1>
        <button>Xizmatlar haqida</button>
      </div>
      <div className="home-img">
        <img src="/icons/mycomputer.svg" alt="#" />
      </div>
    </div>
  )
}
export default HomePage;