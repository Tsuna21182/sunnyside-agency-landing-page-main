function NavBar() {
  return (
    <nav className="font-display flex flex-col items-center gap-8 mt-10 md:flex-row md:mt-0">
      <a
        href="#"
        className="text-DarkGrayishBlue font-bold text-xl md:text-White"
      >
        About
      </a>
      <a
        href="#"
        className="text-DarkGrayishBlue font-bold text-xl md:text-White"
      >
        Service
      </a>
      <a
        href="#"
        className="text-DarkGrayishBlue font-bold text-xl md:text-White"
      >
        Projects
      </a>
    </nav>
  );
}

export default NavBar;
