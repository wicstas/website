let performant_bvh = <div>
<h1>Performant BVH for OpenGL (and CPU)</h1>
<p>(AI generated placeholder) In this blog, I will discuss the implementation of a performant BVH (Bounding Volume Hierarchy) for OpenGL and CPU. The BVH is a tree structure that is used to accelerate ray tracing and collision detection in 3D graphics. It is a hierarchical representation of the scene geometry that allows for efficient traversal and intersection tests.</p>
<img className='w-100' src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Direct_lighting.png"></img>
<p>The BVH is built by recursively subdividing the scene geometry into smaller bounding volumes. Each node in the BVH represents a bounding volume that contains a subset of the scene geometry. The leaf nodes of the BVH contain the actual geometry, while the internal nodes contain bounding volumes that enclose their child nodes.</p>
<p>The performance of the BVH depends on how well it partitions the scene geometry. A good partitioning will result in a balanced tree with a low number of intersection tests. In this blog, I will discuss various techniques for building a performant BVH, including surface area heuristics, spatial partitioning, and object clustering.</p>
</div>

export const blogs = [
  {slug:'performant-bvh', title: "Performant BVH for OpenGL (and CPU) Performant BVH for OpenGL (and CPU)", content: performant_bvh},
  {slug:'performant-bvh-1', title: "Performant BVH for OpenGL 1", content: performant_bvh},
  {slug:'performant-bvh-2', title: "Performant BVH for OpenGL 2", content: performant_bvh},
]
export const titles = blogs.map((blog) => { return {slug: blog.slug, title: blog.title} });