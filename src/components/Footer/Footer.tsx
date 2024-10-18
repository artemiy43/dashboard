import { linksFooter } from "../../utils/constants";
export const Footer = () => {
  return (
    <footer className="w-full p-5 border-t-2 border-black dark:border-white">
      <ul className="flex list-none flex-row justify-center items-center gap-3">
        {linksFooter.map((el) => {
          return (
            <li className="p-2" key={el.id}>
              <a
                href={el.url}
                target="_blank"
                className="flex justify-center items-center gap-2 text-black dark:text-white"
              >
                <img src={el.icon} alt={el.name} />
                <p>{el.name}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};
