import React from 'react';

const Articles = (props) =>{
  
  let allArticles = props.news.map((article, key) =>
      <div id={key} className="article">
        <div className="article-image">
          <img src={article.urlToImage} alt={article.title} />
        </div>
        <div className="article-info">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.url}>Article URL</a>
        </div>
      </div>
  )
  
  return (
    <div id="articles">
      {allArticles}
    </div>
  )
}

export default Articles;