import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { lazy, Suspense } from 'react';

const journals = [
  { slug: 'thought-on-mind', title: "A Petite Thought On Mind", content: lazy(() => import('./journal/thought_on_mind.jsx')) },
  { slug: 'ai-life', title: "Self-Modifying AI Life From Scratch", content: lazy(() => import('./journal/ai_life.jsx')) },
  { slug: 'bedroom-wall', title: "Some Images of a Lamp-lit Wall in my Bedroom", content: lazy(() => import('./journal/bedroom_wall.jsx')) },
]
const titles = journals.map((x) => { return { slug: x.slug, title: x.title } });

export function JournalEntry() {
  const navigate = useNavigate();

  return <div className='flex flex-col'>
    <Helmet>
      <title>A Common Rui's Journal</title>
      <meta name="description" content="I wrote something here" />
    </Helmet>
    <div className='text-center text-xl pb-2'>Journal</div>
    <div className='w-full list-decimal space-y-2'>
      {titles.map(({ slug, title }, index) => (
        <button
          key={index}
          onClick={() => { navigate(`/journal/${slug}`) }}
          className={`btn btn-outline flex w-full justify-start text-left h-auto min-h-10`}
        >{title}</button>
      ))}
    </div>
  </div>;
}

export function Journal() {
  const { slug } = useParams();
  const journal = journals.find((b) => b.slug === slug);

  return <div className='text-left p-5'>
    <Helmet>
      <title>{journal.title}</title>
      <meta name="description" content="This is supposed to be a description of the content" />
    </Helmet>
    <Suspense fallback={<div>Loading...</div>}>
      <journal.content />
    </Suspense></div>;
}