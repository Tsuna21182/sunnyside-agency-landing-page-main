import NavBar from "../components/NavBar";
import Btn from "../components/Btn";
import { useState } from "react";

function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <img src="/images/icon-close.svg" alt="icono menu" />
        ) : (
          <img src="/images/icon-hamburger.svg" alt="icono menu" />
        )}
      </button>

      {isOpen && (
        <div className="bg-White flex flex-col items-center gap-8 p-5 absolute top-25 right-6 w-80">
          <NavBar />
          <Btn />
        </div>
      )}
    </div>
  );
}

export default MenuMobile;
