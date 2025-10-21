import React, { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useLanguageStore from '../store/languageStore';
import uiTranslations from '@content/uiTranslations';
import { formatDate } from "../utils/format";
import { getEmoji } from '../utils/getEmoji';
import MediaItem from './MediaItem';

import './css/BlogPost.css';

// Single item/section/paragraph element in Post
const PostSection = React.memo(({ item }) => {
  if (!item) return null;

  const renderContent = (postItem) => {
    switch (postItem.type) {
      case 'text':
        return <p className="post-text">{postItem.content}</p>;

      case 'image':
        return (
          <section className="image-block">
            <img src={postItem.src} alt={postItem.alt} />
            {postItem.caption && <p>{postItem.caption}</p>}
          </section>
        );

      case 'video':
        return (
          <section className="video-block">
            <MediaItem item={postItem} />
            {postItem.caption && <p>{postItem.caption}</p>}
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="post-section">
      {renderContent(item)}
    </div>
  );
});

/**
 * Renders a blog post with content, metadata, and a "Read More" button in preview mode.
 * 
 * @param {object} post - The post data to display.
 * @param {boolean} [props.preview=false] - Whether to display the post in preview mode.
 * @returns {JSX.Element} The rendered blog post.
 */
function BlogPost({ post, preview = false }) {
    const language = useLanguageStore((state) => state.language);
    const navigate = useNavigate();
    const translations = uiTranslations[language.code] || uiTranslations.en;

    const tags = useMemo(() => [...new Set(post.tags)], [post.tags]);

    const handleReadMore = useCallback(() => {
        navigate(`/blog/post/${post.id}`);
    }, [navigate, post.id]);
    
    return (
    <article className = "post">
        <header className="post-header">
            <h2 className="post-title">{post.title}</h2>
            <h3 className="post-subtitle">{post.subtitle}</h3>
            <div className="post-author-date">
                {getEmoji(post.date)} {translations.postMeta(post.author, formatDate(post.date, language.code))}
            </div>
            <div className="post-tags">
                {tags && tags.map(tag => (
                    <span key={tag} className="tag-box">{tag}</span>
                ))}
            </div>    
        </header>
        {/* If preview, show only first item/section in post
            and "Read More" button to go to full post */}
        <div className="post-body">
            {(preview ? post.items.slice(0, 1) : post.items).map((item, index) => (
                <PostSection key={index} item={item} />
            ))}
        </div>
        {preview && (
            <div className = "read-more">
            <button onClick={handleReadMore}>{translations.readMore}</button>
            </div>
        )}
    </article>
    );
}

export default React.memo(BlogPost);