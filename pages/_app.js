import "../styles/main.css";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/layout";

function MyApp({ Component, pageProps, router }) {
  let easing = [0.175, 0.85, 0.42, 0.96];

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial={{ opacity: 0, x: 60 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.1,
            },
          }}
          exit={{ opacity: 0, x: -60 }}
        >
          <Component {...pageProps} key={router.route} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
