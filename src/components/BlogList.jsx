import React, { useMemo } from 'react';
import { Fade } from 'react-awesome-reveal';
import BlogPost from "./BlogPost";

/**
 * Renders a list of blog post previews.
 * @param {Object[]} posts - An array of post objects to display.
 * @returns {JSX.Element} A list of blog posts.
 */
function BlogList({ posts }) {
  // Memoize rendering to avoid rebuilding unless posts actually change
  const renderedPosts = useMemo(
    () => posts.map((post) => <BlogPost key={post.id} post={post} preview />),
    [posts]
  );

  return (
    <div className="blog-list">
      <Fade cascade damping={0.12} triggerOnce duration={1500}>
        {renderedPosts}
      </Fade>
    </div>
  );
}

export default React.memo(BlogList);