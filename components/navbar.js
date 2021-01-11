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
          <div>
            <Link href="/illustrate">
              <a className="navbar-brand">
                <img src="/images/assets/btn_design.png" height="60px" />
              </a>
            </Link>
          </div>
          <div />
          <div>
            <Link href="/about">
              <a className="navbar-brand">
                <img src="/images/assets/btn_about.png" height="60px" />
              </a>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
