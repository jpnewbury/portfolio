// pages/404.js
import Link from "next/link";
import Image from "next/image";
export default function Custom404() {
  return (
    <div className="">
      <div className="middle">
        <Image
          className="multiply"
          src="/milkSpill404.png"
          height={563}
          width={1000}
          alt="404"
        />
        <span className="center">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
          </ul>
        </span>
      </div>
    </div>
  );
}
