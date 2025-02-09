import NavBar from "../components/NavBar";

function Footer() {
  return (
    <footer className="bg-emerald-300">
      <div className="p-10">
        <h2 className=" text-2xl font-display font-black flex flex-col text-center opacity-50">
          sunnyside
        </h2>
        <NavBar />
      </div>
      <div className="flex justify-center items-center gap-5 py-20">
        <a href="#">
          <img
            src="/images/icon-facebook.svg"
            alt="icono redes"
            className="w-8 hover:scale-125 duration-200"
          />
        </a>
        <a href="#">
          <img
            src="/images/icon-instagram.svg"
            alt="icono redes"
            className="w-8 hover:scale-125 duration-200"
          />
        </a>
        <a href="#">
          <img
            src="/images/icon-twitter.svg"
            alt="icono redes"
            className="w-8 hover:scale-125 duration-200"
          />
        </a>
        <a href="#">
          <img
            src="/images/icon-pinterest.svg"
            alt="icono redes"
            className="w-8 hover:scale-125 duration-200"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
