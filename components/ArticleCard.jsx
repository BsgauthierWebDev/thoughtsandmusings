import React from 'react'

const ArticleCard = ({article}) => {
  return (
    <div>
        {article.title}
        {article.preview}
    </div>
  )
}

export default ArticleCard