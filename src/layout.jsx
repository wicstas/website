import { Link, Outlet, useNavigate } from 'react-router-dom';
import { titles } from './blog-content.jsx';

export default function layout() {  
    const navigate = useNavigate();

    return <div>
      <div className="h-1 w-full bg-primary" />
      <div className="text-center py-4 text-3xl"> A common Rui's uncommon blog</div>

      <div className='w-full flex md:flex-row flex-col font-bold px-10 gap-10 lg:gap-20'>
        
      <div className='lg:p-5 flex-[1] flex flex-col'>
      <nav className="flex flex-col">
        <Link to="/" className="btn btn-link btn-lg">[Home]</Link>
        <Link to="/about" className="btn btn-link btn-lg">[About]</Link>
      </nav>
      <div className='text-center text-xl m-2'>Blogs</div>
      <div className='w-full list-decimal space-y-2'>
        {titles.map(({slug, title}, index) => (
            <button
              key={index}
              onClick={() => {navigate(`/blog/${slug}`)}}
              className={`btn btn-outline flex w-full justify-start text-left h-auto`}
            >{title}</button>
        ))}
      </div>
      </div>

      <main className="lg:p-5 flex-[4] lg:flex-[3]">
      <Outlet />
      </main>

      <div className="flex-[1]">
      </div>
      </div>
  </div>
}