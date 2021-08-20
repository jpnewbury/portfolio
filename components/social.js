import Link from "next/link";
import { motion } from "framer-motion";
import Facebook from "../components/svg/facebook";
import Linked from "../components/svg/linkedin";
import Dribbble from "../components/svg/dribble";
import Github from "../components/svg/github";
import Instagram from "../components/svg/instagram";
import Behance from "../components/svg/behance";

export default function social() {
  return (
    <>
      <motion.h3
        className="white"
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, y: 100 }}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          visible: {
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.7,
            },
          },
        }}
      ></motion.h3>
      <motion.div
        className=" grid-sm"
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, y: 100 }}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          visible: {
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.5,
            },
          },
        }}
      >
        <Link href="https://www.facebook.com/john.p.newbury">
          <a>
            <Facebook style="icon" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/johnpnewbury/">
          <a>
            <Linked style="icon" />
          </a>
        </Link>
        <Link href="https://dribbble.com/newburydesign">
          <a>
            <Dribbble style="icon" />
          </a>
        </Link>
        <Link href="https://www.instagram.com/jpnewbury/">
          <a>
            <Instagram style="icon" />
          </a>
        </Link>
        <Link href="https://www.behance.net/jpnewbury">
          <a>
            <Behance style="icon" />
          </a>
        </Link>
        <Link href="https://github.com/jpnewbury">
          <a>
            <Github style="icon" />
          </a>
        </Link>
      </motion.div>
    </>
  );
}
