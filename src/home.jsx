import 'animate.css';
import { useState } from 'react';

export default function home() {
  const [animate, setAnimate] = useState(' animate__animated animate__fadeIn');

  const triggerAnimation = () => {
    setAnimate('animate__animated animate__shakeX');
  };
  const handleAnimationEnd = () => {
    setAnimate('');
  };
  
  return <div className='flex flex-col'>
      <div className={`text-3xl lg:text-4xl font-bold py-10 ${animate}`} onClick={triggerAnimation} onAnimationEnd={handleAnimationEnd}> A common Rui's blog</div>
    <img className='w-100' src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Direct_lighting.png"></img>
  </div>;
}