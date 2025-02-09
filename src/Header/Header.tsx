import MenuMobile from "../components/MenuMobile";

function Header() {
  return (
    <header className="bg-[url(/images/mobile/image-header.jpg)] bg-no-repeat bg-[center_-17rem] p-5 h-[50rem]">
      <div className="flex justify-between">
        <img src="/images/logo.svg" alt=" imagen logo" />
        <MenuMobile />
      </div>
      <div className="flex flex-col items-center text-center">
        <h2 className="text-White font-body font-bold text-5xl mt-20 uppercase">
          We are creatives
        </h2>
        <img
          src="/images/icon-arrow-down.svg"
          alt="imagen flecha"
          className="mt-25 h-50"
        />
      </div>
    </header>
  );
}

export default Header;
