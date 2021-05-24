import React from 'react';

const Sidebar = (props) => {
    let allHeadlines = props.headlines.map((headline, index) =>
        <li key={index}>{headline.title}</li>
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