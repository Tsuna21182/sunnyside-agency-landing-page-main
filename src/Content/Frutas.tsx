import FrutsDescription from "../components/FrutsDescription";
import Hero from "../Hero/Hero";

function Frutas() {
  return (
    <section className="3xl:px-57">
      <div>
        <FrutsDescription />
      </div>
      <div>
        <Hero />
      </div>
    </section>
  );
}

export default Frutas;
