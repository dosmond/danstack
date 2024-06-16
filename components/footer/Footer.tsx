import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="footer items-center ps-8 pt-4 pb-4 pe-8 bg-neutral text-neutral-content">
      <nav className="flex w-full gap-4 justify-center items-center">
        <Link href="mailto:daniel@danstack.me" target="_blank">
          <i className="fa-solid fa-envelope fa-xl"></i>
        </Link>
        <Link href="https://www.linkedin.com/in/daniel-osmond/" target="_blank">
          <i className="fa-brands fa-linkedin fa-xl"></i>
        </Link>
        <Link href="https://github.com/dosmond" target="_blank">
          <i className="fa-brands fa-square-github fa-xl"></i>
        </Link>
      </nav>
    </footer>
  );
};
