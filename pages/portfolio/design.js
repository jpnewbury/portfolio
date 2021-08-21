import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Navigation from "../../components/navigation";
import { motion } from "framer-motion";
import Card from "../../components/card";
import Tools from "../../components/tools";

export default function Home() {
  return (
    <div className="container center">
      <Head>
        <title>John Newbury - Creative Front End Developer</title>
      </Head>
      <main>
        <article className="article">
          <div>
            <Navigation />
          </div>
        </article>
        <section className="center">
          <div className="grid-ish container-inner">
            <Link href="/portfolio/art">
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
            <Link href="/portfolio/photography">
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
        <section className="block">
          <h2>Design Gallery</h2>
        </section>
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
              <section className="center">
                <div className="grid-ish">
                  <Card
                    title="Seattle"
                    img="/SeattleSkylineCopy.png"
                    height="410"
                    width="600"
                    alt="An illustration of Seattle skyline"
                    footer="Seattle illustration using Affinity Designer"
                  />
                  <Card
                    title="Web Page Mockup"
                    img="/design1.png"
                    height={320}
                    width={440}
                    alt="Angling Arts web page mock"
                    footer="A design for a fly tying website"
                  />
                  <Card
                    title="Aquatic Insect Illustration"
                    img="/drunella1.png"
                    height={310}
                    width={310}
                    alt="An illustration of an aquatic insec"
                    footer="Green drake nymph illustration for my book and website"
                  />
                </div>
              </section>
            </motion.div>
          </section>
        </motion.div>
        <div>
          <Tools />
        </div>
        <footer>
          <article className="article">
            <Navigation />
          </article>
        </footer>
      </main>
    </div>
  );
}
