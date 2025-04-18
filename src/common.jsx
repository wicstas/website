import { Link } from 'react-router-dom';

export function screen(middle_panel, right_panel=null) {
  return (
    <div className='min-h-screen bg-emerald-400 flex flex-col'>
      <div className="h-[2px] w-full bg-sky-600 my-4" />
      <div className="text-center"> Rui's blog </div>
      <div className='w-full flex md:flex-row flex-col font-bold px-10'>
      <nav className="p-5 order-1 flex-[0.5] flex flex-col">
        <Link to="/" className="">[Home]</Link>
        <Link to="/blogs" className="">[Blogs]</Link>
        <Link to="/about" className="">[About]</Link>
      </nav>
      <main className="p-5 order-3 md:order-2 flex-[4]">
        {middle_panel}
      </main>
      <div className="p-5 order-2 md:order-3 flex-[1] text-right">
        {right_panel}
      </div>
    </div>
    </div>
  );
}