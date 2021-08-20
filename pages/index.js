import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Head>
        <title>John P. Newbury UX Design</title>
        <meta
          name="description"
          content="A website built from scratch using next and SCSS"
        />
      </Head>
      <section>
        <article className="hero ">
          <motion.p
            className="intro margin"
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
                  delay: 0.5,
                },
              },
            }}
          >
            I am an artist and web coder bringing my passion for solving design
            challenges across all devices.
          </motion.p>
        </article>
        <article className="center">
          <Image
            src="/1.jpeg"
            height={400}
            width={700}
            alt="Image of John crossing a dangerous canal to optimal fishing water"
          />
        </article>
        <p />
        <p />
      </section>
    </div>
  );
}
