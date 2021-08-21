import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Card from "../../components/card";

export default function Home() {
  return (
    <div className="container center">
      <Head>
        <title>John Newbury - Creative Front End Developer</title>
      </Head>
      <main>
        <section className="block">
          <h2>Design Gallery</h2>
        </section>
        <section>
          <article>
            <div className="body">
              <span>
                <p>
                  Graphic design is functional art. It serves to inform the
                  viewer a story or narrative with a visual impact. The use of
                  shapes, colors and text all merge into a single cohesive
                  design that can describe, influence or motivate the viewer.
                </p>
              </span>
            </div>
          </article>
        </section>

        <nav className="center">
          <Link href="/portfolio/art">
            <a>Art</a>
          </Link>
          <Link href="/portfolio/photography">
            <a>Photography</a>
          </Link>
          <Link href="/portfolio/design">
            <a>Design</a>
          </Link>
        </nav>

        <motion.div initial="initial" animate="animate" exit="pageExit">
          <section>
            <motion.div
              className="center block"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 1,
                  },
                },
              }}
            >
              <section>
                <article className="gallery">
                  <div>
                    <h3>Print and Website Mockup</h3>
                  </div>
                  <div>
                    <Image
                      src="/design1.png"
                      width={1205}
                      height={1016}
                      alt="Mockup design for an upocomg book and companion website"
                    />
                  </div>
                  <div>
                    <p>A design for an upcoming book.</p>
                  </div>
                </article>
                <article className="gallery">
                  <div>
                    <h3>Digital Ilustration</h3>
                  </div>
                  <div>
                    <Image
                      src="/SeattleSkylineCopy.png"
                      width={1173}
                      height={808}
                      alt="Digital illustration of the Seattle skyline"
                    />
                  </div>
                  <div>
                    <p>Designed using Affinty Designer</p>
                  </div>
                </article>
                <article className="gallery">
                  <div>
                    <h3>Scientific Ilustration</h3>
                  </div>
                  <div>
                    <Image
                      src="/drunella1.png"
                      width={943.5}
                      height={1080}
                      alt="Digital illustration of the an aquatic mayfly nymph"
                    />
                  </div>
                  <div>
                    <p>Macro Invertebrate illustration</p>
                  </div>
                </article>
              </section>
            </motion.div>
            <br />
            <br />
          </section>
        </motion.div>
        <section className="center">
          <div className="grid-ish container-inner">
            <Link href="art">
              <a>
                <motion.div
                  className="card3"
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0 }}
                  variants={{
                    hidden: {
                      opacity: 0,
                    },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay: 0.9,
                      },
                    },
                  }}
                >
                  <span className="center">
                    <h2>Art</h2>
                  </span>
                  <h3 className="center white">Fine Art - Illustration</h3>
                </motion.div>
              </a>
            </Link>
            <Link href="/portfolio/design">
              <a>
                <motion.div
                  className="card2"
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0 }}
                  variants={{
                    hidden: {
                      opacity: 0,
                    },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay: 1,
                      },
                    },
                  }}
                >
                  <span className="center">
                    <h2>Design</h2>
                  </span>
                  <h3 className="center white">Web - Mobile - Print</h3>
                </motion.div>
              </a>
            </Link>
            <Link href="photography">
              <a>
                <motion.div
                  className="card1"
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0 }}
                  variants={{
                    hidden: {
                      opacity: 0,
                    },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay: 1.1,
                      },
                    },
                  }}
                >
                  <span className="center">
                    <h2>Photography</h2>
                  </span>
                  <h3 className="center white">Landscapes and Macro</h3>
                </motion.div>
              </a>
            </Link>
          </div>
        </section>
        <br />
        <br />
        <br />
      </main>
    </div>
  );
}
