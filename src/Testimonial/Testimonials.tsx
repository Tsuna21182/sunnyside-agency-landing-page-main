import DbTestimonial from "../Db/DbTestimonial";

function Testimonials() {
  return (
    <section className="mt-20 text-center">
      <h2 className="font-body font-bold uppercase text-2xl text-DarkGrayishBlue">
        Client testimonials
      </h2>
      {DbTestimonial.map((item, index) => (
        <div key={index} className="flex flex-col items-center p-8 gap-5">
          <img
            src={`${item.image}`}
            alt="imagen usuario"
            className="rounded-full w-25"
          />
          <p className="text-VeryDarkDesaturatedBlue font-display font-semibold">
            {item.description}
          </p>
          <h3 className="text-VeryDarkDesaturatedBlue font-bold font-body">
            {item.name}
          </h3>
          <p className="text-DarkGrayishBlue font-body">{item.subtitle}</p>
        </div>
      ))}
    </section>
  );
}

export default Testimonials;
