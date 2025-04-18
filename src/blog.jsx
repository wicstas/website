import { blogs } from './blog-content.jsx';

export default function blog({blogIndex}) {
    return blogIndex === -1 ? <div className='text-center'>Shouldn't be reached</div> :
      <div className='text-center'>{blogs[blogIndex]}</div>;
}