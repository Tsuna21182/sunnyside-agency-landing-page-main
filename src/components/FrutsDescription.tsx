import Data from "../Db/Data";
import Link from "../components/Link";

function FrutsDescription() {
  return (
    <div>
      {Data.map((item, index) => (
        <div
          className="flex flex-col items-center gap-5 text-center mb-15"
          key={index}
        >
          <picture>
            {item.image && (
              <>
                <source
                  media="(min-width: 768px)"
                  srcSet={item.image.desktop}
                />
                <img src={item.image.mobile} alt={item.title} className="" />
              </>
            )}
          </picture>
          <div className="p-8">
            <h2 className="font-body font-bold text-3xl mb-5">{item.title}</h2>
            <p className="text-DarkGrayishBlue">{item.description}</p>
          </div>
          <Link />
        </div>
      ))}
    </div>
  );
}

export default FrutsDescription;
