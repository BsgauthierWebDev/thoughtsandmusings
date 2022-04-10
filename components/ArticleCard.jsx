import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const ArticleCard = ({article}) => {
  console.log(article);

  return (
    <div className = 'article-card-frame'>
      <div className = 'article-card-image-frame'>
        <img 
          src = {article.articleImage.url}
          alt = {article.title}
          className = 'article-card-image'
        />
      </div>
      <h1 className = 'article-card-title'>
        <Link href = {`/article/${article.slug}`}>
          {article.title}
        </Link>
      </h1>
      <div className = 'article-card-preview'>
        <div className = 'article-card-author-image'>
          <img 
            alt = {article.author.name}
            className = 'article-card-author-image-display'
            src = {article.author.authorImage.url}
          />
          <p className = 'article-card-author-name'>{article.author.name}</p>
        </div>
        <div className = 'article-card-date'>
          <svg xmlns="http://www.w3.org/2000/svg" className="article-card-calendar-image" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>
            {moment(article.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <p className = 'article-card-preview-text'>{article.preview}</p>
      <div className = 'article-card-link'>
        <Link href = {`/article/${article.slug}`}>
          <span className = 'article-card-hyperlink'>
            Read More
          </span>
        </Link>
      </div>
    </div>
  )
}

export default ArticleCard