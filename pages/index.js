import Image from "next/image";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div>
      <div className="splash">
        <div className="center">
          <div>
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
                  opacity: [
                    0.3,
                    0.7,
                    0.3,
                    0.7,
                    0.9,
                    1,
                    0.3,
                    1,
                    0.3,
                    0.4,
                    0.5,
                    0.9,
                    0.2,
                    1,
                  ],
                  transition: {
                    delay: 0.05,
                    duration: 0.65,
                    type: "spring",
                    stiffness: 220,
                  },
                },
              }}
            >
              <Image
                src="/images/1.png"
                alt="Newbury Angling Arts and Design - Portfolio"
                height={500}
                width={500}
              />
            </motion.div>
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
}
