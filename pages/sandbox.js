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
    <>
      <h1 class="title">Fun things you can do with pseudo-elements</h1>

      <section className="cards">
        <article className="card increased-legibility">
          <h2 className="card__title">Fun stuff</h2>
          <p>Repudiandae corporis voluptatibus praesentium sequi.</p>
        </article>

        <article class="card card-funky-image">
          <img
            src="https://images.unsplash.com/photo-1629387280946-94c24eb0f6ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyOTgyOTg3Nw&ixlib=rb-1.2.1&q=80&w=400"
            alt="a person posing in front of a round red door"
          />
          <h2 className="card__title">Fun stuff</h2>
          <p>Repudiandae corporis voluptatibus praesentium sequi.</p>
        </article>

        <article className="card gradient-shadow">
          <h2 className="card__title">Another article</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
        </article>
      </section>
    </>
  );
}

export default App;
