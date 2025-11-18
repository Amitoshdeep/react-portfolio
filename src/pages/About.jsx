import React, { useState } from 'react'

function About() {
  const age = useState(18);
  return (
    <div className='bg-black text-white min-h-screen relative
    flex flex-col items-center justify-center
    '>

      <div className='min-h-[80dvh] h-max flex gap-4 items-center text-3xl pl-24'>

        {/* Paragraph div */}
        <div className='flex flex-col gap-10 w-1/2 h-max hoverable'>

          <p className='w-5/6'>
            I'm just a {age} year old kid with a keyboard, a sketchbook, and an endless curiosity for
            the world. I code and develop softwares, and design like every pixel tells a story.
          </p>

          <p>
            Tech isn't just what i do - it's how I see the world, a playground where I build , break, and reinvent.
            Adaptable? Always Enthusiast? Absolutely.
          </p>

        </div>


        {/* Image Div */}
        <div>

        </div>

      </div>

    </div>
  )
}

export default About
