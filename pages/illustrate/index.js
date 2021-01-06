import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
        <div className="center1">
          <div className="header">
            <div>
              <Image
                src="/images/header_illustrate.png"
                alt="Newbury Angling Arts and Design - Portfolio"
                height={250}
                width={400}
              />
            </div>
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
              <Image
                src="/images/logo.png"
                alt="Newbury Angling Arts and Design - Portfolio"
                height={320}
                width={300}
              />
            </motion.div>
          </div>
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
              src="/images/chiliCard.png"
              alt="Newbury Angling Arts and Design - Portfolio"
              height={700}
              width={550}
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
              src="/images/nymphs.png"
              alt="Newbury Angling Arts and Design - Portfolio"
              height={420}
              width={300}
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
                  src="/images/fineart.png"
                  alt="Newbury Angling Arts and Design - Portfolio"
                  height={840}
                  width={500}
                />
              </a>
            </Link>
          </motion.div>
        </div>
        <div className="container">
          <div className="col-3">
            <div>
              <Link href="/">
                <a>
                  <motion.img
                    width="100px"
                    src="/images/left_arrow.png"
                    alt="Newbury Angling Arts and Design - Portfolio"
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
              {" "}
              <img src="/images/right_arrow.png" width="100px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
