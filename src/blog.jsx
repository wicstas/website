import {screen} from './common.jsx';

export default function blog() {
  return screen((<div>`
    you can find a list of blogs on the right panel
  `</div>), <div className='flex flex-col'>Performant BVH for OpenGL (and CPU)</div>);
}