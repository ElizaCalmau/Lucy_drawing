import { AboutMe } from "../../cmps/AboutMe/AboutMe";
import { useCategorieSelector } from "../../store/CategorieSlice/CategorieSlice";

export const Categories = () => {
  const currentCat = useCategorieSelector();
  return <>{currentCat === "About me" && <AboutMe />}</>;
};
