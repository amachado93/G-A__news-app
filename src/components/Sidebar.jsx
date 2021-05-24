import React from 'react';

const Sidebar = (props) => {
    let allHeadlines = props.headlines.slice(0,5).map((headline, index) =>
        <li key={index}><a href={headline.url}>{headline.title}</a></li>
    )      

  return (
    <div className="Sidebar">
      <h4>Top Headlines</h4>
      <ol className="top-headlines">
        {allHeadlines}
      </ol>
    </div>
  )
}

export default Sidebar;