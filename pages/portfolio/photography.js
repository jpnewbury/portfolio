import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

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
                  Cameras tell the truth. As an image capturing device, the
                  camera records everything you point it at. Being able to
                  capture the time and place is the foundation of a good
                  photograph. Creating a photograph in black and white or with
                  special color treatments becomes art.
                </p>
              </span>
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
                    <h3>Glenwood Canyon</h3>
                  </div>
                  <div>
                    <Image
                      src="/glenwoodPanoHDRmonochrome.jpg"
                      width={840}
                      height={501.5}
                      alt="Black and white photo of interstae 70 as it passes through hanging lake tunnel in Colorado"
                    />
                  </div>
                  <div>
                    <p>Black and white photo</p>
                  </div>
                </article>
                <article className="gallery">
                  <div>
                    <h3>Edge of Life</h3>
                  </div>
                  <div className="center">
                    <Image
                      src="/juniper.jpg"
                      width={600}
                      height={840}
                      alt="Black and white photo depicting an aging mine on a mountainside in the San Juan mountains of Colorado"
                    />
                  </div>
                  <div>
                    <p>Black and white photo</p>
                  </div>
                </article>
                <article className="gallery">
                  <div>
                    <h3>Old Pagosa</h3>
                  </div>
                  <div>
                    <Image
                      src="/pagosa.jpg"
                      width={840}
                      height={625}
                      alt="Black and white photo depicting an aging mine on a mountainside in the San Juan mountains of Colorado"
                    />
                  </div>
                  <div>
                    <p>Black and white photo</p>
                  </div>
                </article>
                <article className="gallery">
                  <div>
                    <h3>Lost Man</h3>
                  </div>
                  <div>
                    <Image
                      src="/121.jpg"
                      width={840}
                      height={625}
                      alt="Black and white photo depicting an aging mine on a mountainside in the San Juan mountains of Colorado"
                    />
                  </div>
                  <div>
                    <p>color photo</p>
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
