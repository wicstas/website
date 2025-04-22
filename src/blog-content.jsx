let mind = <div>
  <h1 className="text-3xl">A Petite Thought On Mind</h1>
  <br></br>
  <p>22/4/2025</p>
  <p >When you see a hundred bucks lying on the ground, the psychologists tell us that the light reflected from the paper enters your eye and 
    is converted into electric signals which is then processed by the brain. The brain processes the signal via its many neurons which interact with each other through chemical reactions and physics. When you decide to pick
    the paper with your hand, it's those neurons that result in the decision, that send the pick-up-the-paper signal to your hand.</p><br/>
    <p className="indent-8">"You" are not needed in this process. This "you" is what people commonly referred to as the your mind. Actually, you are not needed in any processes. There need only chemical reactions and physics in the universe. The mind seems to be a complete independent system from the universe, of which it never interferes.</p> <br/>
    <p className="indent-8">I believed in the validity of the conclusion for a few months. But I recently realized that the fact that we talk about mind, that we have this very conversion, implies that the mind does affect the universe, and in particular the brain. Then, the feeling of being a conscious being rather than a computer running neural networks must originates from the brain itself. </p>
</div>

export const blogs = [
  { slug: 'mind', title: "A Petite Thought On Mind", content: mind },
]
export const titles = blogs.map((blog) => { return { slug: blog.slug, title: blog.title } });