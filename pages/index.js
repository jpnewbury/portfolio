import React, { Component } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="center">
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
                  delay: 0.45,
                  duration: 0.65,
                  // ease: [0.48, 0.15, 0.25, 0.96],
                  type: "spring",
                  stiffness: 100,
                },
              },
            }}
          >
            <Image
              src="/images/logo.png"
              alt="Newbury Angling Arts and Design Portfolio"
              width={300}
              height={320}
            />
          </motion.div>
        </div>
      </div>
    );
  }
}

export default Home;
