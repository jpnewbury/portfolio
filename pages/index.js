import Link from "next/link";
import Image from "next/image";
import Background from "../components/background";
import Heading from "../components/pageHeading";
import Social from "../components/social";
import GalleryLink from "../components/galleryLink";

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

        <GalleryLink />
      </section>
    </div>
  );
}
