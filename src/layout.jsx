import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import StarCanvas from './star.jsx';

export default function Layout() {
  return <div className='w-screen h-screen font-shortstack flex flex-col lg:flex-row'>

      <div className='w-full lg:w-50 flex flex-col bg-base-200'>
        <div className='h-20 bg-repeat-x bg-contain' style={{ backgroundImage: `url('/night_sky.png')` }} />
        <div className='h-2 w-full bg-primary'/>
        <nav className="flex flex-col font-thin gap-2">
          <Link to="/" className="btn btn-primary text-xl">[Home]</Link>
          <Link to="/blog" className="btn btn-primary text-xl">[blog]</Link>
          <Link to="/me" className="btn btn-primary text-xl">[Me]</Link>
        </nav>
      </div>


      <div className='w-auto flex grow flex-col h-full flex-[4] lg:flex-[3]'>
        <main className='grow'>
          <Outlet />
        </main>
        <footer className='text-center text-sm pt-10'>
          © 2025 <i>Rui Li</i>
        </footer>
      </div>

      <div className='shrink lg:h-full flex flex-col lg:flex-row relative'>
        <div className='relative h-20 lg:w-20 lg:h-full bg-repeat-x lg:bg-repeat-y bg-contain' style={{ backgroundImage: `url('/tree_shadow_10.png')` }} />
        <div className='hidden lg:block relative w-full lg:w-40 2xl:w-80 lg:h-full'>
          <StarCanvas starCount={200} />
        </div>
        <div className='absolute z-10 w-40 h-40 bg-no-repeat bg-contain translate-x-60 hidden 2xl:block 2xl:translate-y-70 brightness-90 contrast-110' style={{ backgroundImage: `url('/jupiter.png')` }} />
      </div>
  </div>
}