import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Newbury Angling Arts and Design - Portfolio</title>
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
          <div>
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
                  opacity: [
                    0.3,
                    0.7,
                    0.3,
                    0.7,
                    0.9,
                    1,
                    0.3,
                    1,
                    0.3,
                    0.4,
                    0.5,
                    0.9,
                    0.2,
                    1,
                  ],
                  transition: {
                    delay: 0.05,
                    duration: 0.65,
                    type: "spring",
                    stiffness: 220,
                  },
                },
              }}
            >
              <Image
                src="/images/logo.png"
                alt="Newbury Angling Arts and Design - Portfolio"
                height={300}
                width={300}
              />
            </motion.div>
            <div>
              <Link href="/illustrate">
                <a>
                  <motion.img
                    width="300px"
                    src="/images/btn_portfolio.png"
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
          </div>
        </div>
      </div>
    </div>
  );
}
