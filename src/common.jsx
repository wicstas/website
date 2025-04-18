import { Link } from 'react-router-dom';

export function screen(middle_panel, right_panel=null) {
  return (
    <div className='min-h-screenflex flex-col'>
      <div className="h-1 w-full bg-primary" />
      <div className="text-center py-4 text-3xl"> Rui's blog</div>
      <div className='w-full flex md:flex-row flex-col font-bold lg:px-10 gap-10 lg:gap-20'>
      <nav className="lg:p-5 order-1 flex-[0.5] flex flex-col gap-2">
        <Link to="/" className="btn btn-link">[Home]</Link>
        <Link to="/blog" className="btn btn-link">[Blogs]</Link>
        <Link to="/about" className="btn btn-link">[About]</Link>
      </nav>
      <main className="lg:p-5 order-3 md:order-2 flex-[3.5] lg:flex-[3]">
        {middle_panel}
      </main>
      <div className=" order-2 md:order-3 flex-[1] text-right">
        {right_panel}
      </div>
    </div>
    </div>
  );
}