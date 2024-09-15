import Link from "next/link";

const Header = () => {
  return (
    <header className="grid">
      <h1>Travel around the world</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
