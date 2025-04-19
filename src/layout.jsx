import { Link, Outlet, useNavigate } from 'react-router-dom';
import { titles } from './blog-content.jsx';

export default function layout() {  
    const navigate = useNavigate();

    return <div className='flex flex-col w-screen h-screen'>
      <div className="text-center py-4 text-3xl"> A common Rui's <span className="hidden lg:inline text-[10px]"> (somewhat uncommon)</span> blog</div>
      <div className="flex-none h-1 bg-secondary" />

      <div className='flex grow md:flex-row flex-col px-10 gap-5 lg:gap-10'>
        <div className='lg:py-5 flex-[1] flex flex-col'>
          <nav className="flex flex-col font-bold gap-2">
            <Link to="/" className="btn btn-primary text-xl">[Home]</Link>
            <Link to="/about" className="btn btn-primary text-xl">[About]</Link>
          </nav>
          <div className='bg-base-100 rounded-lg ring-2 ring-base-200 mt-5 w-full'>
            <div className='text-center text-xl text-bold pb-2'>Blogs</div>
            <div className='w-full list-decimal space-y-2'>
              {titles.map(({slug, title}, index) => (
                  <button
                    key={index}
                    onClick={() => {navigate(`/blog/${slug}`)}}
                    className={`btn btn-ghost flex w-full justify-start text-left h-auto min-h-10`}
                  >{title}</button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-none w-1 bg-base-300" />

        <main className="lg:p-5 flex-[4] lg:flex-[3] font-mono">
        <Outlet />
        </main>

        <div className="flex-none w-1 bg-base-300" />
        <div className="flex-[1]">
        </div>
      </div>
      
    <div className="flex-none h-1 bg-secondary" />
    <footer className="text-center text-sm pt-10 pb-4">
      © 2025 <i>Rui Li</i>. All rights reserved.
    </footer>
  </div>
}