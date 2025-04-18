import {screen} from './common.jsx';
import { useState } from 'react';

let titles;
let blogs;

export default function blog() {
  const [blogIndex, setBlogIndex] = useState(-1);

  return screen(
    blogIndex === -1 ? <div className='text-center'>No blog selected yet</div> :
      <div className='text-center'>{blogs[blogIndex]}</div>, <ol className='w-full list-decimal space-y-2'>
        {titles.map((title, index) => (
          <li key={index}>
            <button
              onClick={() => setBlogIndex(index)}
              className={`btn btn-outline flex w-full justify-start text-left h-auto ${
              blogIndex === index ? 'btn-active' : ''}`}
            >{title}</button>
          </li>
        ))}
      </ol>);
}

titles = ["Performant BVH for OpenGL (and CPU)", "B", "C"];
blogs = [
  <div>
    <h1>Performant BVH for OpenGL (and CPU)</h1>
    <p>In this blog, I will discuss the implementation of a performant BVH (Bounding Volume Hierarchy) for OpenGL and CPU. The BVH is a tree structure that is used to accelerate ray tracing and collision detection in 3D graphics. It is a hierarchical representation of the scene geometry that allows for efficient traversal and intersection tests.</p>
    <p>The BVH is built by recursively subdividing the scene geometry into smaller bounding volumes. Each node in the BVH represents a bounding volume that contains a subset of the scene geometry. The leaf nodes of the BVH contain the actual geometry, while the internal nodes contain bounding volumes that enclose their child nodes.</p>
    <p>The performance of the BVH depends on how well it partitions the scene geometry. A good partitioning will result in a balanced tree with a low number of intersection tests. In this blog, I will discuss various techniques for building a performant BVH, including surface area heuristics, spatial partitioning, and object clustering.</p>
  </div>,
  <div>
    <h1>B</h1>
    <p>This is blog B</p>
  </div>,
  <div>
    <h1>C</h1>
    <p>This is blog C</p>
  </div>,
]