import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactIco from "../components/svg/Contact";
import Resume from "../components/svg/Resume";
import Bookmark from "../components/svg/bookmark";

export default function Contact() {
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
            <article className="center">
              <Image
                src="/DSC03699.jpg"
                height={533}
                width={800}
                alt="John setting up for a video shoot in Colorado"
              />
            </article>
          </div>
          <div>
            <article>
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
                <div className="col-2l">
                  <div>
                    <ContactIco style="icon-sm-or" />
                  </div>
                  <div>
                    <a href="mailto:john.newbury@gmail.com">Email</a>
                  </div>
                </div>
                <div className="col-2l">
                  <div>
                    <Resume style="icon-sm-or" />
                  </div>
                  <div>
                    <Link href="/resume">
                      <a>Resume</a>
                    </Link>
                  </div>
                </div>
                <div className="col-2l">
                  <div>
                    <Bookmark style="icon-sm-or" />
                  </div>
                  <div>
                    {" "}
                    <Link href="https://flyfish-pied.vercel.app/">
                      <a>
                        Newbury Angling Arts - My branded fly fishing website
                      </a>
                    </Link>
                  </div>
                </div>
              </motion.p>
              <p></p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
