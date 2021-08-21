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
        <section className="block">
          <h2>Photo Gallery</h2>
        </section>
        <section>
          <article>
            <div className="body">
              <span>
                <p>
                  Cameras tell the truth. As an image capturing device, the
                  camera records everything you point it at. Being able to take
                  the viewer to a time and place with your photo is the
                  foundation of a good image. Creating a photograph in black and
                  white or with special color treatments becomes art when you
                  succesfuly transported your audience to that time and place.
                </p>
              </span>
            </div>
          </article>

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
                <article className="gallery">
                  <div>
                    <h3>Cascades</h3>
                  </div>
                  <div>
                    <Image
                      src="/OPfallsoutput.jpg"
                      width={840}
                      height={625}
                      alt="Black and white photo depicting an aging mine on a mountainside in the San Juan mountains of Colorado"
                    />
                  </div>
                  <div>
                    <p>color photo</p>
                  </div>
                </article>

                <article className="gallery">
                  <div>
                    <h3>Green River</h3>
                  </div>
                  <div>
                    <Image
                      src="/GreenRiverUtahDesert.jpg"
                      width={840}
                      height={625}
                      alt="Color image of green river utah desert in winter "
                    />
                  </div>
                  <div>
                    <p>color photo</p>
                  </div>
                </article>
                <h3>Macro and Product Photography</h3>
                <article className="gallery">
                  <div>
                    <h3>Parmachene Belle</h3>
                  </div>
                  <div>
                    <Image
                      src="/ParmacheneBelle.jpg"
                      width={800}
                      height={800}
                      alt="Macro photo of fishing flies "
                    />
                  </div>
                  <div>
                    <p>Macro photo</p>
                  </div>
                </article>

                <article className="gallery">
                  <div>
                    <h3>Alt Krust</h3>
                  </div>
                  <div>
                    <Image
                      src="/altKrust.jpg"
                      width={800}
                      height={800}
                      alt="Macro photo of fishing flies "
                    />
                  </div>
                  <div>
                    <p>Macro photo</p>
                  </div>
                </article>
                <article className="gallery">
                  <div>
                    <h3>Drop Dead Sexy</h3>
                  </div>
                  <div>
                    <Image
                      src="/DropDeadSexyWalts.jpg"
                      width={800}
                      height={800}
                      alt="Macro photo of fishing flies "
                    />
                  </div>
                  <div>
                    <p>Macro photo</p>
                  </div>
                </article>
                <div className="center">
                  <a href="https://flyfish-pied.vercel.app/">
                    See more of my fishing flies and fishing articles here
                  </a>
                </div>
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
