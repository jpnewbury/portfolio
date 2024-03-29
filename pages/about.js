import GalleryLink from "../components/galleryLink";
import Background from "../components/background";
import Heading from "../components/pageHeading";
import Learn from "../components/svg/learn";
import Social from "../components/social";
import Photoshop from "../components/svg/photoshop";
import Illustrator from "../components/svg/illustrator";
import Indesign from "../components/svg/inDesign";
import Aftereffects from "../components/svg/AfterEffects";
import Xd from "../components/svg/xd";
import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>John P. Newbury - About</title>
        <meta
          property="og:title"
          content="John P. Newbury - Designer"
          key="title"
        />
      </Head>
      <section>
        <div className="wireframe">
          <Background />
        </div>
        <div className="content">
          <Heading />
          <div className="center">
            <div className="bg-image2">
              <div className="copy">
                <span className="intro">
                  <p>
                    A valuable member of a web development team brings many
                    skills to the table beyond the scope of their designated
                    task. As an artist and scientist, I understand the big
                    picture with a keen eye on the minute details.
                  </p>
                </span>
              </div>
              <div className="empty"></div>
              <div className="bottom"></div>
            </div>
          </div>
          <nav>
            <ul>
              <li>
                <a href="mailto:john.newbury@gmail.com">Contact</a>
              </li>
              <li>
                <a href="https://www.dropbox.com/s/7xo88x48pgs6h6w/JohnPNewburyResume2021.pdf?dl=0">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <section className="split bg-white">
          <article>
            <span className="intro">
              <p>
                I am a team player willing to tackle several positions to meet
                your company&apos;s needs. My experience in all phases of
                front-end web development taught me what works, what
                doesn&apos;t work, and a willingness to dive into the unknown.
              </p>
            </span>
            <Learn />
            <p>
              Learning is what I do best. If I don&apos;t know how to do
              something, I eagerly seek out the best method to accomplish the
              goal.
            </p>
            <p>
              I bring over two and a half decades of experience in web
              development as an independent contractor. I have deep knowledge of
              HTML, CSS and JavaScript. I have used various frameworks and
              libraries and have come to enjoy working NextJs (React) and SCSS
              the most.
            </p>
            <p>
              I have over 24 years using Adobe tools, but am never limited to
              this list.
            </p>
            <b>Adobe CC</b>

            <div className="col5">
              <div>
                <Photoshop style="icon" />
              </div>
              <div>
                <Illustrator style="icon" />
              </div>
              <div>
                <Indesign style="icon" />
              </div>
              <div>
                <Aftereffects style="icon" />
              </div>
              <div>
                <Xd style="icon" />
              </div>
            </div>

            <b>Other tools:</b>
            <ul>
              <li>Figma</li>
              <li>Sketch</li>
              <li>VS Code</li>
              <li>Github</li>
            </ul>
          </article>
          <article>
            <p>
              This website coded using <b>Next.JS</b> and <b>SCSS</b>
            </p>
          </article>
          <article className="links">
            <p>
              When not writing code or painting, I can be found waist deep in a
              cold river fly fishing. I am a signature fly designer for &nbsp;
              <a href="https://www.fullingmill.com/">Fulling Mill</a>. My{" "}
              <a href="https://www.instagram.com/j.p.newbury/">instagram</a>{" "}
              feed has over 9000 followers and showcasing my fly tying and macro
              photography.
            </p>
            <p>
              I give lectures and presentations for fly shops and clubs on the
              art of fly tying and tactical fly fishing. I was recently featured
              in a short film for&nbsp;
              <a href="https://youtu.be/5HMMnpSw-24">G Loomis fly rods.</a>
            </p>
          </article>
        </section>
        <GalleryLink />
      </section>
      <section className="center s2">
        <Social />
      </section>
    </div>
  );
}
