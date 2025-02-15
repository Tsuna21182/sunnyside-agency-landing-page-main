function Grid() {
  return (
    <section className="grid grid-cols-2 xl:grid-cols-4 mt-15">
      <div>
        <img
          src="/images/mobile/image-gallery-milkbottles.jpg"
          alt="imagen galeria"
          className="md:hidden"
        />
        <img
          src="/images/desktop/image-gallery-milkbottles.jpg"
          alt="imagen galeria"
          className="hidden md:block"
        />
      </div>
      <div>
        <img
          src="/images/mobile/image-gallery-orange.jpg"
          alt="imagen galeria"
          className="md:hidden"
        />
        <img
          src="/images/desktop/image-gallery-orange.jpg"
          alt="imagen galeria"
          className="hidden md:block"
        />
      </div>
      <div>
        <img
          src="/images/mobile/image-gallery-cone.jpg"
          alt="imagen galeria"
          className="md:hidden"
        />
        <img
          src="/images/desktop/image-gallery-cone.jpg"
          alt="imagen galeria"
          className="hidden md:block"
        />
      </div>
      <div>
        <img
          src="/images/mobile/image-gallery-sugar-cubes.jpg"
          alt="imagen galeria"
          className="md:hidden"
        />
        <img
          src="/images/desktop/image-gallery-sugarcubes.jpg"
          alt="imagen galeria"
          className="hidden md:block"
        />
      </div>
    </section>
  );
}

export default Grid;
