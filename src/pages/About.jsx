import React, { useState } from 'react'

import FlowingMenu from '../components/reactbits/FlowingMenu';

function About() {
  const [age,setAge] = useState(18);

  const skillItems = [
    { link: 'https://www.w3schools.com/cpp/', text: 'C/C++', image: 'https://i.pinimg.com/1200x/01/67/a6/0167a67a0a9259a17c1b7b536247d9a0.jpg' },
    { link: 'https://www.w3schools.com/js/', text: 'JavaScript', image: 'https://i.pinimg.com/736x/af/b7/cc/afb7cc78a074c1117a79ae76e09332b8.jpg' },
    { link: 'https://www.w3schools.com/react/', text: 'React.js', image: 'https://i.pinimg.com/736x/a9/fe/2f/a9fe2f5d2fe51a08531f9350c8e449cc.jpg' },
    { link: 'https://www.w3schools.com/nodejs/', text: 'Node.js', image: 'https://i.pinimg.com/1200x/85/0c/9e/850c9e624ef14617c49a9a66291804c0.jpg' },
    { link: 'https://www.w3schools.com/nodejs/nodejs_express.asp', text: 'Express.js', image: 'https://i.pinimg.com/736x/ed/59/53/ed59533d5b25c3522f86f4ef78d2a7ab.jpg' },
    { link: 'https://www.w3schools.com/mongodb/', text: 'MongoDB', image: 'https://i.pinimg.com/736x/ba/94/53/ba945315f07b2bb926633746ce959eaf.jpg' },
    { link: 'https://www.w3schools.com/bash/', text: 'Linux', image: 'https://i.pinimg.com/1200x/13/7b/d1/137bd1b8143bdf67af794c7c5b83f4f0.jpg' },
    { link: 'https://www.w3schools.com/git/', text: 'Git & GitHub', image: 'https://i.pinimg.com/1200x/bb/57/22/bb572239250955954ac781173ff678ec.jpg' },
  ];

  return (
    <div className='bg-black text-white min-h-screen relative
    flex flex-col items-center justify-center
    '>

      <div className='min-h-[80dvh] h-max flex gap-4 items-center text-3xl pl-24'>

        {/* Paragraph div */}
        <div className='flex flex-col gap-10 w-1/2 h-max hoverable relative z-10'>

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
        {/* <iframe src='https://my.spline.design/robotfollowcursorforlandingpagemc-T8Hys5tShB1Wn8THjIhbYlZm/' frameborder='0' width='100%' height='100%'></iframe> */}
        </div>

      </div>

    {/* Skills Menu */}
      <div className='relative h-[800px] w-full'>
        <FlowingMenu items={skillItems} />
      </div>

    </div>
  )
}

export default About
