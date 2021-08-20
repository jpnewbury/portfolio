import Link from "next/link";
function about() {
  return (
    <>
      <header>
        <h1>John P. Newbury Design</h1>
        <h3>Ux Driven Web Developer</h3>
      </header>
      <nav className="center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/design">Design</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </>
  );
}

export default about;
