import {screen} from './common.jsx';
import { useState } from 'react';

let items;

export default function blog() {
  const [blogIndex, setBlogIndex] = useState(-1);

  return screen((<div>
    you can find a list of blogs on the right panel
  </div>), <ol className='list-decimal'>
        {items.map((title, index) => (
          <li key={index}>
            <button
              onClick={() => setBlogIndex(index)}
              className="btn btn-soft flex w-full justify-start text-left"
            >{title}</button>
          </li>
        ))}
      </ol>);
}

items = ["Performant BVH for OpenGL (and CPU)", "B", "C"];