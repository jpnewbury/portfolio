import React from "react";
import Link from "next/link";

export default function nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/gallery">
            <a>Design</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
