function Hero() {
  return (
    <section>
      <div className="bg-[url(/images/mobile/image-graphic-design.jpg)] bg-no-repeat bg-[auto_700px] flex flex-col text-center h-[37rem] p-5">
        <h2 className="font-body font-bold text-2xl mt-96">Graphic Design</h2>
        <p className="text-VeryDarkDesaturatedBlue font-display font-bold mt-5">
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients´ attention.
        </p>
      </div>
      <div className="bg-[url(/images/mobile/image-photography.jpg)] bg-no-repeat bg-[auto_700px] flex flex-col text-center h-[37rem] p-5">
        <h2 className="font-body font-bold text-2xl mt-96">Photography</h2>
        <p className="text-VeryDarkDesaturatedBlue font-display font-bold mt-5">
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </section>
  );
}

export default Hero;
