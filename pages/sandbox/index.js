import React, { Component } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
class sandbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Head>
          <title>Newbury Angling Arts and Design - CSS Sandboox</title>
          <meta
            property="og:title"
            content="Newbury Angling Arts and Design - CSS Sandbox"
            key="title"
          />

          <meta
            name="description"
            content="A gallary of design, illustrations and front-end web development"
          />
        </Head>
        <div className="container">
          <div className="center">
            <div className="stacked">
              <div>
                <Image
                  src="/images/logo.png"
                  alt="Newbury Angling Arts and Design - Portfolio"
                  height={520}
                  width={500}
                />
              </div>
              <div>
                <Image
                  src="/images/btn_portfolio.png"
                  alt="Newbury Angling Arts and Design - Portfolio"
                  height={120}
                  width={300}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default sandbox;
