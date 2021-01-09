import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../components/navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Newbury Arts and Design - Illustration Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Newbury Angling Arts and Design - About"
          key="title"
        />

        <meta
          name="description"
          content="A gallary of design, illustrations and front-end web development"
        />
      </Head>

      <div className="container">
        <div className="center1">
          <div className="header">
            <motion.div
              className="center"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.1,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.05,
                    duration: 0.65,
                    type: "spring",
                    stiffness: 120,
                  },
                },
              }}
            >
              <Link href="/">
                <a>
                  <Image
                    src="/images/1.png"
                    alt="Newbury Angling Arts and Design - Portfolio"
                    height={320}
                    width={320}
                  />
                </a>
              </Link>
            </motion.div>
            <div>
              {/* <Image
                src="/images/about_header.png"
                alt="Newbury Angling Arts and Design - Portfolio"
                height={250}
                width={400}
              /> */}
            </div>
          </div>
        </div>
        <Navbar />
        <div className="caontainer">
          <div className="center">
            <div className="slug">
              <h1>John P. Newbury, </h1>
              <h2>Designer Developer</h2>
              <p>
                I have taken the long, circuitous route into the world of web
                development. I started in the late 1980&#39;s shooting fashion
                and editorial photography.
              </p>
              <p>
                I was approached to lead a new publication as editor-in-chief
                called Seen Magazine. I arranged a team of artists, writers,
                photographers to assemble a magazine focused on the burgeoning
                Pearl District life style.
              </p>
              <p>
                While I was successful in creating and publishing a glossy new
                magazine back then, I was not able to find a web developer. I
                saw that a magazine could enhance it&rsquo;s brand experience
                with an on-line presence. It was my belief that a symbiotic
                relationship should occur between print and web experiences.
              </p>
              <p>
                I learned how to hand code HTML while waiting out a long wet
                Oregon winter. I also learned very early versions of Adobe
                Illustrator and Photoshop which I still use -- updated versions
                -- to this day. It didn&#39;t take long when I had vision for an
                interactive user experience to enhance my magazine. I began to
                expand my technical skills with frequent trips to Powells
                bookstore.
              </p>
              <p>
                I stopped working for the magazine and opened my on web
                development studio. I consulted with a couple of small Portland
                design firms. I translated print designs into web pages and
                eventually ported print designs into interactive motion
                graphics. It was an exciting time in the new landscape of
                virtual experiences.
              </p>
              <p>
                In 1999, I was asked to teach professional web development
                course for Macromedia at Portland State University. I was noted
                locally for for developing data driven SVG animations in flash,
                I was also skilled at building PHP and MySQL based websites and
                taught a course in using Macromedia UltraDev Studio.
              </p>
              <p>
                In 2010 I closed my web development practice and returned to
                school. I earned degrees in environmental science and in
                fisheries. After graduation, I relocated to my childhood home of
                Colorado to pursuit a new career path in something fishy such as
                guiding or as a biologist. In the meantime, I developed a
                handful popular fly patterns with global sales by Fullingmill
                and continue to build my fly fishing brand.
              </p>
              <p>
                I have return to the world of web development as a front end
                developer. I am now seeking new opportunities to expand my
                development portfolio, work for a small team and develop ne
                projects.
              </p>
              <br />
              <div className="slug">
                Check out my most recent project I developed for Roaring Fork
                Conservancy ->
                <a href="https://rfc-hot-spots-app.web.app/">
                  &nbsp; Hot Spots for Trout
                </a>
                <br />
                <a href="http://www.roaringfork.org/media/2214/2020-fall-newsletter_final_for-web.pdf">
                  Read about the app in an article I wrote for the monthy
                  newsletter.
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col-3">
            <div>
              <Link href="/">
                <a>
                  <motion.img
                    width="100px"
                    src="/images/left_arrow.png"
                    alt="go baack a page"
                    whileHover={{
                      position: "relative",
                      zIndex: 1,
                      scale: [1, 1.3, 1.1],
                      rotate: [0, 10, -10, 0],
                      transition: {
                        duration: 0.2,
                      },
                    }}
                  />
                </a>
              </Link>
            </div>
            <div></div>
            {/* <div>
              <Link href="/design">
                <a>
                  <motion.img
                    width="100px"
                    src="/images/right_arrow.png"
                    alt="go forward a page"
                    whileHover={{
                      position: "relative",
                      zIndex: 1,
                      scale: [1, 1.3, 1.1],
                      rotate: [0, 10, -10, 0],
                      transition: {
                        duration: 0.2,
                      },
                    }}
                  />
                </a>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
