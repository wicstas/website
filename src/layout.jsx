import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import StarCanvas from './star.jsx';

export default function Layout() {
  const [treeIndex, setTreeIndex] = useState(0);
  const maxIndex = 10;

  return <div className='flex flex-col w-screen h-screen font-shortstack'>
    <div className='flex h-[120%] lg:flex-row flex-col gap-5 lg:gap-10'>

      <div className='lg:py-5 flex-[1] flex flex-col bg-base-200'>
        <nav className="flex flex-col font-thin gap-2">
          <Link to="/" className="btn btn-primary text-xl">[Home]</Link>
          <Link to="/about" className="btn btn-primary text-xl">[About]</Link>
          <Link to="/blog" className="btn btn-primary text-xl">[blog]</Link>
        </nav>
      </div>


      <div className='lg:p-5 flex flex-col h-full flex-[4] lg:flex-[3]'>
        <main className='grow'>
          <Outlet />
        </main>
        <footer className='text-center text-sm pt-10'>
          © 2025 <i>Rui Li</i>
        </footer>
      </div>

      <div className='flex-[1] h-full flex flex-row'>
        <div className={`w-20 h-full bg-repeat-y bg-contain bg-[url('/foliage_pack/tree_0.png')]`}/>
        <div className='w-full h-full'>
          <StarCanvas starCount={200} />
        </div>
      </div>
    </div>
  </div>
}