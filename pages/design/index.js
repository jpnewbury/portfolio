import React, { Component } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      status: "In progression...",
    };
  }
  componentDidMount() {
    this.setState({
      isLoading: false,
      status: "Completed!",
    });
  }
  render() {
    return (
      <main>
        <>
          {this.state.isLoading ? (
            <div className="container">
              <div className="center">
                <h1>Loading.....</h1>
              </div>
            </div>
          ) : (
            <div className="container">
              <div className="center1">
                <div className="header">
                  <motion.div
                    className="center"
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
                    <Link href="/">
                      <a>
                        <Image
                          src="/images/logo.png"
                          alt="Newbury Angling Arts and Design - Portfolio"
                          height={320}
                          width={300}
                        />
                      </a>
                    </Link>
                  </motion.div>
                  <div>
                    <Image
                      src="/images/design_header.png"
                      alt="Newbury Angling Arts and Design - Portfolio"
                      height={250}
                      width={400}
                    />
                  </div>
                </div>
              </div>
              <div className="center1">
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
                        delay: 0.25,
                        duration: 0.5,
                      },
                    },
                  }}
                >
                  <Link href="/">
                    <a>
                      <Image
                        src="/images/logomock.png"
                        alt="Newbury Angling Arts and Design - Portfolio"
                        height={800}
                        width={800}
                      />
                    </a>
                  </Link>
                </motion.div>
              </div>
              <div className="center1">
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
                        delay: 0.15,
                        duration: 0.65,
                        type: "spring",
                        stiffness: 120,
                      },
                    },
                  }}
                >
                  <Image
                    src="/images/book.png"
                    alt="Newbury Angling Arts and Design - Portfolio"
                    height={1666}
                    width={1066}
                  />
                </motion.div>
              </div>
              <div className="center1">
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
                        delay: 0.25,
                        duration: 0.5,
                      },
                    },
                  }}
                >
                  <Image
                    src="/images/poster.png"
                    alt="Newbury Angling Arts and Design - Portfolio"
                    height={1066}
                    width={1156}
                  />
                </motion.div>
              </div>
              <div className="center1">
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
                        delay: 0.25,
                        duration: 0.5,
                      },
                    },
                  }}
                >
                  <Link href="/">
                    <a>
                      <Image
                        src="/images/troutstream.png"
                        alt="Newbury Angling Arts and Design - Portfolio"
                        height={1058}
                        width={826}
                      />
                    </a>
                  </Link>
                </motion.div>
              </div>
              <div className="center1">
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
                        delay: 0.25,
                        duration: 0.5,
                      },
                    },
                  }}
                >
                  <Link href="/">
                    <a>
                      <Image
                        src="/images/castlevalley.png"
                        alt="Newbury Angling Arts and Design - Portfolio"
                        height={1900}
                        width={2585}
                      />
                    </a>
                  </Link>
                </motion.div>
              </div>
              <div className="center1">
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
                        delay: 0.25,
                        duration: 0.5,
                      },
                    },
                  }}
                >
                  <Link href="/">
                    <a>
                      <Image
                        src="/images/bridgecity.png"
                        alt="Newbury Angling Arts and Design - Portfolio"
                        height={490}
                        width={1066}
                      />
                    </a>
                  </Link>
                </motion.div>
              </div>

              <div className="center1">
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
                        delay: 0.25,
                        duration: 0.5,
                      },
                    },
                  }}
                >
                  <Link href="/">
                    <a>
                      <Image
                        src="/images/PagosaDistillarylabel.png"
                        alt="Newbury Angling Arts and Design - Portfolio"
                        height={1000}
                        width={1066}
                      />
                    </a>
                  </Link>
                </motion.div>
              </div>
              <div className="container">
                <div className="col-3">
                  <div>
                    <Link href="/illustrate">
                      <a>
                        <motion.img
                          width="100px"
                          src="/images/left_arrow.png"
                          alt="Newbury Angling Arts and Design - Portfolio"
                          whileHover={{
                            position: "relative",
                            zIndex: 1,
                            scale: [1, 1.3, 1.1],
                            rotate: [0, 10, -10, 0],
                            transition: {
                              duration: 0.2,
                            },
                          }}
                        />
                      </a>
                    </Link>
                  </div>
                  <div></div>
                  <div>
                    <Link href="/develop">
                      <a>
                        <motion.img
                          width="100px"
                          src="/images/right_arrow.png"
                          alt="Newbury Angling Arts and Design - Portfolio"
                          whileHover={{
                            position: "relative",
                            zIndex: 1,
                            scale: [1, 1.3, 1.1],
                            rotate: [0, 10, -10, 0],
                            transition: {
                              duration: 0.2,
                            },
                          }}
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      </main>
    );
  }
}
export default App;
