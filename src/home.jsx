import 'animate.css';
import { useState, useEffect } from 'react';

export default function home() {
  const [animate, setAnimate] = useState('');

  const [cloud, setCloud] = useState(3);

  useEffect(() => {
    if (cloud == 1)
      return;
    const nextSrc = `/clouds/cloud_shape2_${cloud - 1}.webp`;

    const img = new Image();
    img.src = nextSrc;
  }, [cloud]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCloud((prev) => prev - 1 == 0 ? 3 : prev - 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const triggerAnimation = () => {
    setAnimate('animate__animated animate__shakeX');
  };
  const handleAnimationEnd = () => {
    setAnimate('');
  };
  
  return <div className='flex flex-col'>
    <div className='relative'>
    <div className={`absolute z-0 h-10 w-full bg-repeat-x bg-contain`} style={{ backgroundImage: `url('/clouds/cloud_shape2_${cloud}.webp')` }} />
    <div className={`relative z-10 h-10 w-full lg:bg-gradient-to-r lg:from-transparent from-0% lg:via-transparent via-50% lg:to-base-100 lg:to-100%`}/>
    </div>
      <div className={`px-10 py-5 text-3xl lg:text-4xl font-bold ${animate}`} onClick={triggerAnimation} onAnimationEnd={handleAnimationEnd}>A Common Rui's Website</div>
      <div className='px-10'>Welcome to my website!</div>
  </div>;
}