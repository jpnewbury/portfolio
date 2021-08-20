import Header from "../components/pageHeading";
import Footer from "../components/footer";

export default function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
