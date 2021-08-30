import "../styles/main.css";
import Layout from "../components/layout";
import { useState } from "react";
import Loading from "../components/loading";
import { motion, AnimatePresence } from "framer-motion";
import Router from "next/router";

export default function MyApp({ Component, pageProps, router }) {
  // loading screen when route changes
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    console.log("Loading started");
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
    console.log("Loading stopped");
  });
  return (
    <>
      {loading && (
        <div className="modal">
          <Loading style="loader" />
        </div>
      )}
      <AnimatePresence exitBeforeEnter>
        <Layout>
          <motion.div
            key={router.route}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.75,
              },
            }}
            exit={{ opacity: 0 }}
          >
            <Component {...pageProps} key={router.route} />
          </motion.div>
        </Layout>
      </AnimatePresence>
    </>
  );
}
