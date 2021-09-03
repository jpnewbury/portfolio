import Link from "next/link";
import Image from "next/image";
import Background from "../components/background";
import Heading from "../components/pageHeading";
import Social from "../components/social";

export default function Home() {
  return (
    <div className="container">
      <section>
        <div className="wireframe">
          <Background />
        </div>
        <div className="content">
          <Heading />
          <div className="center">
            <div className="bg-image">
              <div className="copy">
                <span className="intro">
                  <p>
                    Many good websites have hidden flaws or pain points that can
                    interrupt the ease and flow users encounters along the
                    journey. These interruptions often halt a user dead in their
                    tracks and send them elsewhere. Users encountering bad
                    websites before visiting your site can impact their
                    perception of your design. Can your site compensate for
                    previous experiences, or does it merely add to the mounting
                    frustration of encountering poorly designed websites?
                    <Link href="/gallery">
                      <a> More...</a>
                    </Link>
                  </p>
                </span>
              </div>
              <div className="empty"></div>
              <div className="bottom">
                <Social />
              </div>
            </div>
          </div>
        </div>
        <span className="small-header">
          <Link href="gallery">
            <a>
              <h3>Visit my gallery of designs ...</h3>
            </a>
          </Link>
        </span>
        <div className="center">
          <div className="grid">
            <article className="card2">
              <h2>Design & Illustration</h2>
              <img src="SeattleSkylineCopy.png" width="100%" alt="an image" />
              <small>Illustration and Graphics</small>
            </article>

            <article className="card2">
              <h2>Photography</h2>
              <img src="gossips.jpg" width="100%" alt="an image" />
              <small>Mountains, Rivers and Deserts</small>
            </article>

            <article className="card2">
              <h2>Fine Art</h2>
              <img src="Spell2.jpg" width="100%" alt="an image" />
              <small>Painting and Drawings</small>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
