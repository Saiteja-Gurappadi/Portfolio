import React from 'react'
import vector from '../Images/Vector 187.png';
import mixedround from '../Images/doodles mixed round.png';
import group from '../Images/Group 2346.png';

const Home = () => {
  return (
          <div className="flex-column h-screen bg-slate-900 relative">
        <div className='absolute left-[30%] h-[100%] border-l border-solid border-slate-800 z-1 '>
          <h1 className='h-[80px] w-[10px] text-white'>
↓</h1>
        </div>
        <div className='w-[100%] text-white h-[15%] border-b border-solid border-slate-800   px-[70px] '>
        <div className='flex w-[100%] h-[100%] justify-between items-center '>
          <div className='flex items-center'>
            <h1 className='font-oswald font-bold  text-[18px]'>SaiTeja's Design</h1>
          </div>
          <div className='font-poppins flex items-center justify-between w-[30%]'>
              <p className='hover:text-cyan-400 transition cursor-pointer'>Home</p>
              <p className='hover:text-cyan-400 transition cursor-pointer'>My Projects</p>
              <p className='hover:text-cyan-400 transition cursor-pointer'>About Me</p>
              <p className='hover:text-cyan-400 transition cursor-pointer'>Contact </p>
          </div> 
        </div>
      </div>
      <div className='flex items-center gap-[120px] justify-center mt-[70px] z-10 relative '>
          <div className='flex gap-[5px]'>
            <div className='h-[270px] flex items-center'>
              <img src={vector} alt='' className='h-[160px] w-[30px]'/>
            </div>
            <div className='flex flex-col gap-[40px] h-[250px] justify-center'>
              <h1 className='text-white text-5xl font-bold flex flex-col gap-[15px]'> CREATIVE UI <br/><span className='text-cyan-400'>
                DESIGNER</span> </h1>
              <div className='flex items-center gap-[10px]'>
                <button className='bg-cyan-500 text-white font-semibold px-6 py-2 rounded-full font-medium hover:bg-cyan-400 transition'>Hire Me</button>
                <button className='bg-slate-800 text-white font-semibold px-6 py-2 rounded-full font-medium hover:bg-slate-700 transition' >Download CV</button>
              </div>
              
            </div>
          </div>
          <div className='flex relative'>
            <img src={mixedround} alt='' className='absoulte z-0 top-[80px]'/>
            <img src={group} alt='' className='absolute z-1 top-[140px] right-[110px]'/>
          </div>
      </div>

    </div>
  )
}

export default Home