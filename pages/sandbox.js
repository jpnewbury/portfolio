import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Background from "../components/background";
import Heading from "../components/pageHeading";
import Seo from "../components/svg/Seo";
import Responsive from "../components/svg/Responsive";
import Photography from "../components/svg/photography";
import Art from "../components/svg/art";
import Social from "../components/social";

function App() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return (
    <div className="app">
      <div className="section">
        <section className="split bg-white" id="article">
          <article>
            <span className="intro">
              <p>
                Small details can have an impact on how a user experiences your
                website or app. Frequently overlooked details such as form
                fields which present the wrong keyboard layout can cause a user
                to leave your website or never return due to a subconsciously
                negative experience. How long a user spends searching for an @
                sign when filling out an email field can impact the overall user
                experience.
              </p>
            </span>
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
              they encounter them and click out of your website or app.
            </p>
            <Seo />
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
          </article>
          <div className="isVisible">
            {isVisible ? "IN VIEWPORT" : "NOT IN VIEWPORT"}
          </div>
        </section>
      </div>
      <div className="box">
        <section className="s2">
          <div className="grid ">
            <article className="card2 center ">
              <h2>A sample page design</h2>
              <Image
                src="/design1.png"
                height={300}
                width={380}
                alt="an image"
              />
              <small>
                This design is in development as part of a book and companion
                SPA app. (single page web app)
              </small>
            </article>
            <div className="box" ref={containerRef}>
              Observe me you filthy voyeur :S
            </div>
            <article className="card2 center">
              <h2>Macro invertebrate illustration</h2>
              <Image
                src="/drunella1.png"
                height={300}
                width={200}
                alt="an image"
              />

              <small>Digital illustration for print and web</small>
            </article>
            <article className="card2 center">
              <h2>Digital illustration</h2>
              <Image
                src="/SeattleSkylineCopy.png"
                height={400}
                width={600}
                alt="an image"
              />
              <small>Seattle skyline drawn using Adobe Illustrator</small>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
