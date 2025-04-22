import { useParams, useNavigate } from 'react-router-dom';
import { blogs, titles } from './blog-content.jsx';
import { Helmet } from 'react-helmet';

export function BlogList() {
  const navigate = useNavigate();

  return <div className='flex flex-col'>
    <Helmet>
      <title>A Common Rui's Blog</title>
      <meta name="description" content="I wrote something here" />
    </Helmet>
    <div className='text-center text-xl pb-2'>Blogs</div>
    <div className='w-full list-decimal space-y-2'>
      {titles.map(({ slug, title }, index) => (
        <button
          key={index}
          onClick={() => { navigate(`/blog/${slug}`) }}
          className={`btn btn-outline flex w-full justify-start text-left h-auto min-h-10`}
        >{title}</button>
      ))}
    </div>
  </div>;
}

export function Blog() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  return <div className='text-left p-5'>
    <Helmet>
      <title>{blog.title}</title>
      <meta name="description" content="This is supposed to be a description of the content" />
    </Helmet>
    {blog.content}</div>;
}