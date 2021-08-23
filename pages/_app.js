import "../styles/main.css";
import Router from "next/router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/layout";
import Loading from "../components/loading";

function MyApp({ Component, pageProps, router }) {
  let easing = [0.175, 0.85, 0.42, 0.96];
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    console.log(url);
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
    console.log("Loading stop");
  });

  return (
    <Layout>
      {loading && (
        <div className="modal">
          <Loading style="loader" />
        </div>
      )}
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.1,
            },
          }}
          exit={{ opacity: 0 }}
        >
          <Component {...pageProps} key={router.route} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
