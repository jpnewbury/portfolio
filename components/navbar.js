import React, { Component } from "react";
import Link from "next/link";
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="center">
        <div className="header">
          <Link href="/illustrate">
            <a className="navbar-brand">
              {" "}
              <img src="/images/illustration_button.png" height="40px" />
            </a>
          </Link>

          <Link href="/develop">
            <a className="navbar-brand">
              <img src="/images/development_button.png" height="40px" />
            </a>
          </Link>
          <Link href="/about">
            <a className="navbar-brand">
              {" "}
              <img src="/images/about_button.png" height="40px" />
            </a>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
