import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../components/navbar";
export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="center">
          <div className="header center">
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
                    src="/images/assets/logo.png"
                    alt="Newbury Angling Arts and Design - Portfolio"
                    height={420}
                    width={420}
                  />
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
        <Navbar />
        <div className="caontainer">
          <div className="center1">
            <div>
              <Image
                src="/images/assets/journal.png"
                alt="Newbury Angling Arts and Design - Portfolio"
                height={1366}
                width={800}
              />
            </div>
          </div>
          <div className="center1">
            <div>
              <Image
                src="/images/assets/tuPoster.png"
                alt="Newbury Angling Arts and Design - Portfolio"
                height={830}
                width={800}
              />
            </div>
          </div>
          <div className="center1">
            <div>
              <Image
                src="/images/assets/typography.png"
                alt="Newbury Angling Arts and Design - Portfolio"
                height={764}
                width={800}
              />
            </div>
          </div>
          <div className="center1">
            <div>
              <Image
                src="/images/assets/pagosa.png"
                alt="Newbury Angling Arts and Design - Portfolio"
                height={612}
                width={800}
              />
            </div>
          </div>
          <div className="center1">
            <div>
              <Image
                src="/images/assets/bridgecity.png"
                alt="Newbury Angling Arts and Design - Portfolio"
                height={446}
                width={800}
              />
            </div>
          </div>
          <div className="center1">
            <div>
              <Image
                src="/images/assets/pwa.png"
                alt="Newbury Angling Arts and Design - Portfolio"
                height={2984}
                width={800}
              />
            </div>
          </div>
          <div className="center1">
            <div>
              <Link href="/about">
                <a>
                  <Image
                    src="/images/assets/footer.png"
                    alt="Newbury Angling Arts and Design - Portfolio"
                    height={400}
                    width={400}
                  />
                </a>
              </Link>
              <p className="center">© 2021 John P. Newbury Art and Design.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
