import Data from "../Db/Data";
import Link from "../components/Link";

function FrutsDescription() {
  return (
    <div>
      {Data.map((item, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            className="flex flex-col items-center gap-5 text-center mb-15 md:grid md:grid-cols-2 md:gap-0 md:mb-0"
            key={index}
          >
            <picture className={isEven ? "md:order-2" : "md:order-1"}>
              {item.image && (
                <>
                  <source
                    media="(min-width: 768px)"
                    srcSet={item.image.desktop}
                  />
                  <img src={item.image.mobile} alt={item.title} />
                </>
              )}
            </picture>
            <div
              className={`p-8 ${
                isEven ? "md:order-1" : "md:order-2"
              } md:flex md:flex-col md:text-left `}
            >
              <h2 className="font-body font-bold text-3xl mb-5 md:text-5xl">
                {item.title}
              </h2>
              <p className="text-DarkGrayishBlue md:mb-5 md:text-2xl">
                {item.description}
              </p>
              <Link />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FrutsDescription;
