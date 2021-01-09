import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Newbury Angling Arts and Design - CSS Sandbox</title>
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

      <div className="card-container">
        <div className="center">
          <div className="card">
            <h1>MELLO</h1>
          </div>
          <div className="card1">
            <h1>MELLO</h1>
          </div>
          <div className="card2">
            <h1>MELLO</h1>
          </div>
          <div className="card3">
            <h1>MELLO</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
