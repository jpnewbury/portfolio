import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Social from "../components/social";
import Youtube from "../components/svg/Youtube";

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
      <section className="content">
        <div className="col-2">
          <div>
            <article>
              <Image
                src="/5.jpeg"
                height={800}
                width={533}
                alt="Image of John crossing a dangerous canal to optimal fishing water"
              />
            </article>
          </div>
          <div>
            <article className="article">
              <motion.p
                className="blockQuote"
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
                <p>
                  A valuable member of a web development team brings many skills
                  to the table beyond the scope of their designated task. As an
                  artist and scientist, I understand the big picture with a keen
                  eye on the minute details.
                </p>
                <p>
                  I am a team player willing to tackle several positions to meet
                  your company&apos;s needs. Two and a half decades of
                  experience in all phases of front-end web development taught
                  me what works, what doesn&apos;t work, and a willingness to
                  dive into the unknown.
                </p>
                <span className="center">
                  <Social />
                </span>
                <p>
                  When not building websites, I can be found chasing wild fish
                  with a fly rod or painting landscapes in oil.
                </p>
                <div className="col-2la">
                  <div>
                    <Youtube style="icon" />
                  </div>
                  <div>
                    <a href="https://youtu.be/5HMMnpSw-24">
                      Check out this video I participated in for a fly rod
                      manufacturer.
                    </a>
                  </div>
                </div>
              </motion.p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
