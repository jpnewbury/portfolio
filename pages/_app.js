import "../styles/index.css";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            initial: { scale: 0.1, y: 30, opacity: 0 },
            enter: {
              scale: 1,
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: [0.48, 0.15, 0.25, 0.96],
              },
            },
            exit: {
              scale: 0.5,
              y: 100,
              opacity: 0,
              transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
