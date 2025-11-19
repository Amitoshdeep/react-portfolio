import React from 'react'

import '@/css/waves.css';
import { IoIosArrowDown } from "react-icons/io";
import TextPressure from '../components/reactbits/TextPressure';

import About from './About';

function Home() {
  return (
    <div className='flex justify-center text-4xl flex-col' id='home'>

      {/* <div className='hoverable'>
        App
      </div> */}

      {/* Div 1 Main about */}
      <div className='min-h-[70dvh] h-fit flex flex-col items-center justify-center gap-2 relative'>

        <div className='flex flex-col gap-2'>
          <p className='text-lg flex items-start'>
            Hi!
          </p>
          <h1 className='flex gap-1 items-end'>
            <p className='hoverable font-semibold text-black/90 text-5xl'>
              Amitoshdeep
            </p>

            <p className='text-lg'>
              here
            </p>
          </h1>

        </div>

        <IoIosArrowDown className='absolute bottom-0 animate-bounce' />

      </div>
      {/* Waves BG */}

      <div className='relative'>
        {/* Just black bar to hide a lien */}
        <div className='absolute bg-black h-2/12 bottom-0 left-0 w-full z-10'></div>
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"

          >
          <path fill="#000">
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
              M0,120
              Q120,160 240,120
              T480,110
              T720,160
              T960,115
              T1200,150
              T1440,120
              V320H0Z;

              M0,120
              Q120,80 240,120
              T480,160
              T720,90
              T960,75
              T1200,120
              T1440,80
              V320H0Z;

              M0,120
              Q120,160 240,120
              T480,110
              T720,160
              T960,115
              T1200,150
              T1440,120
              V320H0Z;
              "
              />
          </path>
        </svg>
      </div>

      {/* Div 2 Skills Section */}
      <div id='about'
      className='min-h-[70vh] bg-black text-white p-4 pt-0
      flex items-center justify-start flex-col gap-10
      '>

        <h2 className='text-lg'>
          About Me
        </h2>

        <p className=''>
          I'm a <span className='text-blue-400'> programmer </span> skilled at creating
        </p>

        <div className='relative w-full hoverable px-12'>
          <TextPressure
            text="EXPERIENCE"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={120}
          />
        </div>

        <p className='text-lg text-white bg-stone-950 px-4 py-2 rounded-xl'>
          using code & tech
        </p>

        <About/>

      </div>


    </div>
  )
}

export default Home
