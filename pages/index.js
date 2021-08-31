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
          <div className=" center">
            <div className="center">
              <Image
                src="/1.jpeg"
                height="480"
                width="700"
                alt="image"
                className="float"
              />
            </div>
            <span className="intro bg-white">
              <p>
                Many good websites have hidden flaws or pain points that can
                interrupt the ease and flow users encounters along the journey.
                These interruptions often halt a user dead in their tracks and
                send them elsewhere. Users encountering bad websites before
                visiting your site can impact their perception of your design.
                Can your site compensate for previous experiences, or does it
                merely add to the mounting frustration of encountering poorly
                designed websites?
                <Link href="/gallery">More...</Link>
              </p>
            </span>
          </div>
        </div>
      </section>
      <section className="center s2">
        <Social />
      </section>
    </div>
  );
}
