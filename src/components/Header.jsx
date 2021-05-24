import React from 'react';

function Header() {
  return (
    <header id="header">
      <div className="header-left">
        <h1>Vandelay News <span role="img" aria-label="newspaper">📰</span></h1>
      </div>
      <div className="header-menu-content">
        <a href="#">Browse</a>
        <a href="#">Media</a>
        <a href="#">About</a>
      </div>
    </header>
  )
}

export default Header;