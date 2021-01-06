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
      </div>
    </div>
  );
}
