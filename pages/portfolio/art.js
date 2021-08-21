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
        <section className="block">
          <h2>Art Gallery</h2>
        </section>
        <section>
          <article>
            <div className="body">
              <span>
                <p>
                  Painting as a discipline has taught me many things about the
                  world we live in and how people perceive design. The act of
                  reducing a scene to its basic shapes, colors, and value is the
                  foundation of good design. Designing a document holds the same
                  process as painting on a canvas. A good painting has a lead-in
                  point that catches the users eye and directs it through the
                  page hierarchy to tell the story, invoke an emotional
                  response, or convey an idea.
                </p>
              </span>
              <p>
                A web page based on the design thinking principle has a natural
                flow that users do not have to think or adjust their perceptions
                to understand. Users unfamiliar with your website will settle in
                and feel comfortable navigating without adding unnecessary
                design elements to guide them.
              </p>
            </div>
          </article>
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
              <section>
                <article className="gallery">
                  <div>
                    <h3>Jaffe Park</h3>
                  </div>
                  <div>
                    <Image
                      src="/JaffeParkAspenPainting.jpg"
                      width={840}
                      height={716}
                      alt="An oil painting of the Roaring Fork River in Aspen colorado"
                    />
                  </div>
                  <div>
                    <p>Oil on canvas 20&quot; x 24&quot;, SOLD</p>
                  </div>
                </article>
                <article className="gallery">
                  <div>
                    <h3>Spell of the Sensous #2</h3>
                  </div>
                  <div>
                    <Image
                      src="/Spell2.jpg"
                      width={840}
                      height={623}
                      alt="An oil painting of a bristlecone pine on a rocky outcrop in the Rocky Mountains"
                    />
                  </div>
                  <div>
                    <p>Oil on canvas 24&quot; x 36&quot; SOLD</p>
                  </div>
                </article>
                <article className="gallery">
                  <div>
                    <h3>Silver Lake</h3>
                  </div>
                  <div>
                    <Image
                      src="/SilverLakeBrightonUtah.jpg"
                      width={1700}
                      height={1235}
                      alt="Oil painting of an alpine lake in autumn with calm water reflections"
                    />
                  </div>
                  <div>
                    <p>Oil on panel 24&quot; x 36&quot;</p>
                  </div>
                </article>
              </section>
            </motion.div>
            <br />
            <br />
          </section>
        </motion.div>
      </main>
    </div>
  );
}
