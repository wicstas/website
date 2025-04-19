import { useParams } from 'react-router-dom';
import { blogs } from './blog-content.jsx';

export default function blog() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

    return <div className='text-center'>{blog.content}</div>;
}