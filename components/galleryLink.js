import Image from "next/image";
import Link from "next/link";

export default function galleryLink() {
  return (
    <div className="center">
      <span className="small-header">
        <Link href="gallery">
          <a>
            <h3>Visit my gallery for all of my designs</h3>
          </a>
        </Link>
      </span>
      <div className="center">
        <div className="grid">
          <Link href="/gallery#design">
            <article className="card2">
              <h2>Design & Illustration</h2>
              <img src="SeattleSkylineCopy.png" width="100%" alt="an image" />
              <small>Illustration and Graphics</small>
            </article>
          </Link>

          <Link href="/gallery#photography">
            <article className="card2">
              <h2>Photography</h2>
              <img src="gossips.jpg" width="100%" alt="an image" />
              <small>Mountains, Rivers and Deserts</small>
            </article>
          </Link>
          <Link href="/gallery#art">
            <article className="card2">
              <h2>Fine Art</h2>
              <img src="Spell2.jpg" width="100%" alt="an image" />
              <small>Painting and Drawings</small>
            </article>
          </Link>
        </div>
      </div>
    </div>
  );
}
