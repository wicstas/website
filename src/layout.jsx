import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import StarCanvas from './star.jsx';

export default function Layout() {
  return <div className='flex flex-col w-screen h-screen font-shortstack'>
    <div className='flex h-[120%] lg:flex-row flex-col'>

      <div className='lg:py-5 flex-[1] flex flex-col bg-base-200'>
        <nav className="flex flex-col font-thin gap-2">
          <Link to="/" className="btn btn-primary text-xl">[Home]</Link>
          <Link to="/blog" className="btn btn-primary text-xl">[blog]</Link>
          <Link to="/me" className="btn btn-primary text-xl">[Me]</Link>
        </nav>
      </div>


      <div className='flex flex-col h-full flex-[4] lg:flex-[3]'>
        <main className='grow'>
          <Outlet />
        </main>
        <footer className='text-center text-sm pt-10'>
          © 2025 <i>Rui Li</i>
        </footer>
      </div>

      <div className='flex-[1] w-full lg:h-full flex flex-col lg:flex-row'>
        <div className='h-20 lg:w-20 lg:h-full bg-repeat-x lg:bg-repeat-y bg-contain' style={{ backgroundImage: `url('/tree_shadow_10.png')` }} />
        <div className='h-20 w-full lg:h-full'>
          <StarCanvas starCount={200} />
        </div>
      </div>
    </div>
  </div>
}