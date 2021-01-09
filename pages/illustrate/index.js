import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../components/navbar";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Newbury Angling Arts and Design - Illustration Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Newbury Angling Arts and Design - Portfolio"
          key="title"
        />

        <meta
          name="description"
          content="A gallary of design, illustrations and front-end web development"
        />
      </Head>

      <div className="container">
        <div className="center">
          <div className="header center">
            <motion.div
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
          </div>
        </div>
        <Navbar />
        <div className="caontainer">
          <div className="center">
            <Image
              src="/images/chiliCard.png"
              alt="Illusttated chili recipe"
              height={826}
              width={660}
            />
          </div>
          <div className="center">
            <Image
              src="/images/nymphs.png"
              alt="Macroinvertebrate illustrations"
              height={500}
              width={400}
            />
          </div>
          <div className="center1">
            <motion.div
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
                    delay: 0.15,
                    duration: 0.65,
                    type: "spring",
                    stiffness: 120,
                  },
                },
              }}
            >
              <Image
                src="/images/book.png"
                alt="Newbury Angling Arts and Design - Portfolio"
                height={1466}
                width={900}
              />
            </motion.div>
          </div>
          <div className="center1">
            <motion.div
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
                    delay: 0.25,
                    duration: 0.5,
                  },
                },
              }}
            >
              <Image
                src="/images/poster.png"
                alt="Newbury Angling Arts and Design - Portfolio"
                height={1066}
                width={1000}
              />
            </motion.div>
          </div>
          <div className="center1">
            <motion.div
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
                    delay: 0.25,
                    duration: 0.5,
                  },
                },
              }}
            >
              <Link href="/">
                <a>
                  <Image
                    src="/images/troutstream.png"
                    alt="Newbury Angling Arts and Design - Portfolio"
                    height={800}
                    width={600}
                  />
                </a>
              </Link>
            </motion.div>
          </div>
          <div className="center1">
            <motion.div
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
                    delay: 0.25,
                    duration: 0.5,
                  },
                },
              }}
            >
              <Link href="/">
                <a>
                  <Image
                    src="/images/castlevalley.png"
                    alt="Newbury Angling Arts and Design - Portfolio"
                    height={900}
                    width={1200}
                  />
                </a>
              </Link>
            </motion.div>
          </div>
          <div className="center1">
            <motion.div
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
                    delay: 0.25,
                    duration: 0.5,
                  },
                },
              }}
            >
              <Image
                src="/images/bridgecity.png"
                alt="Newbury Angling Arts and Design - Portfolio"
                height={490}
                width={1066}
              />
            </motion.div>
          </div>
          <div className="center1">
            <Image
              src="/images/PagosaDistillarylabel.png"
              alt="fine art paintings"
              height={490}
              width={600}
            />
          </div>
          <div className="center1">
            <motion.div
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
                    delay: 0.25,
                    duration: 0.5,
                  },
                },
              }}
            >
              <Image
                src="/images/artboard.png"
                alt="Newbury Angling Arts and Design - Portfolio"
                height={1300}
                width={800}
              />
            </motion.div>
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
            <div>
              <Link href="/develop">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
