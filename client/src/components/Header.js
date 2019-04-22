import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <nav>
        <div className="nav-wrapper">
          <a
            className="left brand-logo"
          >
            FeedBackr
          </a>
          <ul className="right">
            <li>
              <a
              >
                Login With Google
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;

// <nav>
//   <div class="nav-wrapper">
//     <a href="#" class="brand-logo">Logo</a>
//     <ul id="nav-mobile" class="right hide-on-med-and-down">
//       <li><a href="sass.html">Sass</a></li>
//       <li><a href="badges.html">Components</a></li>
//       <li><a href="collapsible.html">JavaScript</a></li>
//     </ul>
//   </div>
// </nav>
