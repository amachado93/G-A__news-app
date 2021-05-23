import React from 'react';

const Articles = (props) =>{
  
  let allArticles = props.news.map((article, index) =>
      <div key={index} className="article">
        <div className="article-image">
          <a href={article.url}><img src={article.urlToImage} alt={article.title} /></a>
        </div>
        <div className="article-info">
          <h3><a href={article.url}>{article.title}</a></h3>
          <p>{article.description}</p>
          <a className="article-link" href={article.url}>Read more ➡</a>
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