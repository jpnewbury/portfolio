import React, { Component } from "react";
import Link from "next/link";
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar">
        <Link href="/illustrate">
          <a className="navbar-brand">Design & Illustration</a>
        </Link>
        <Link href="/develop">
          <a className="navbar-brand">Front End Development</a>
        </Link>
        <Link href="/about">
          <a className="navbar-brand">About</a>
        </Link>
      </nav>
    );
  }
}

export default Nav;
