import React, { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

import AfterEffects from "../components/svg/AfterEffects";
import Photoshop from "../components/svg/photoshop";
import Illustrator from "../components/svg/illustrator";
import InDesign from "../components/svg/inDesign";
import Figma from "../components/svg/Figma";
import Procreate from "../components/svg/Procreate";
import CSS from "../components/svg/css";
import HTML from "../components/svg/html";
import SCSS from "../components/svg/SCSS";
import JavaScript from "../components/svg/javaScript";
import Mongo from "../components/svg/Mongo";
import MySQl from "../components/svg/MySQL";
import ReactLogo from "../components/svg/React";
import Git from "../components/svg/Git";
import Toolbox from "../components/svg/toolbox";
import Palette from "../components/svg/Palette";

export default function About() {
  // let easing = [0.6, -0.05, 0.01, 0.99];
  const [page, setPage] = useState(1);

  return (
    <main className="container">
      <Head>
        <title>Design - John P. Newbury</title>
      </Head>
      <div>
        <section className="center hero">
          <span className="intro">
            <p>
              Many good websites have hidden flaws that can interrupt the ease
              and flow users encounters along the journey. These interruptions
              often halt a user dead in their tracks and send them elsewhere.
              Users encountering bad websites before visiting your site can
              impact their perception of your design. Can your site compensate
              for previous experiences, or does it merely add to the mounting
              frustration of encountering poorly designed websites?
            </p>
          </span>
        </section>
        <div className="margin">
          <p></p>
        </div>
        <div className="margin">
          <Palette style="icon-lg" />
        </div>
        <section className="center">
          <div className="grid-ish">
            <div>
              <Link href="art" as="portfolio/art">
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
                          delay: 0.5,
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
            </div>
            <Link href="/portfolio" as="portfolio/design">
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
                        delay: 0.7,
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
            <Link href="photography" as="portfolio/photography">
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
                        delay: 0.9,
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

        <div className="center">
          <motion.div
            className="blockQuote"
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
                  delay: 0.5,
                },
              },
            }}
          >
            <p>
              Small details can have an impact on how a user experiences your
              website or app. Frequently overlooked details such as form fields
              which present the wrong keyboard layout can cause a user to leave
              your website or never return due to a subconsciously negative
              experience. How long a user spends searching for an @ sign when
              filling out an email field can impact the overall user experience.
            </p>
            <p>
              To build engaging and equitable websites, I employ design thinking
              and user interaction research. Designs that are clear and concise
              are easier to navigate by everyone, not just the web elite.
            </p>
            <p>
              I avoid adding unnecessary barriers to content like modal pop-up
              windows or subscription portals which block content and cannot be
              closed without the user searching for the close button. These
              barriers feel intrusive and can sidetrack a user from the desired
              content they are seeking. Many users feel confused or fished when
              they encounter them and cick out of your website or app.
            </p>
            <p>
              Designing a website for search engines and accessibility is
              automatically built into my design process. Search engines must
              have access to your content. Web pages structured around a clear
              document hierarchy and factoring in WCAG accessibility standards
              rank better.
            </p>
            <p>
              Editing or developing engaging content is often the responsibility
              of the designer. Hiring a designer that can create content and
              understand how user experience and accessibility play a role in
              the delivery is hard to find. My experience as an editor and
              developer brings a full toolbox of required disciplines to build a
              complete website experience.
            </p>

            <p></p>
          </motion.div>
        </div>

        <div className="margin">
          <Toolbox style="icon-lg" />
          <small className="margin">
            These are just some of the tools I like to use. I am never limited
            to using or learning other tools not listed.
          </small>
        </div>

        <section className="grid-sm bg-w">
          <div>
            <HTML style="icon" />
          </div>
          <div>
            <CSS style="icon" />
          </div>
          <div>
            <JavaScript style="icon" />
          </div>
          <div>
            <ReactLogo style="icon" />
          </div>
          <div>
            <SCSS style="icon" />
          </div>
          <div>
            <Mongo style="icon" />
          </div>
          <div>
            <MySQl style="icon" />
          </div>
          <div>
            <Git style="icon" />
          </div>
        </section>

        <section className="grid-sm bg-w">
          <div>
            <AfterEffects style="icon" />
          </div>
          <div>
            <Photoshop style="icon" />
          </div>
          <div>
            <Illustrator style="icon" />
          </div>
          <div>
            <InDesign style="icon" />
          </div>
          <div>
            <Figma style="icon" />
          </div>
          <div>
            <Procreate style="icon" />
          </div>

          <br />
        </section>
      </div>

      <p></p>
      <p></p>
    </main>
  );
}
