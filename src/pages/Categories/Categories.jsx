import { useCategorieSelector } from "../../store/CategorieSlice/CategorieSlice"

export const Categories = () => {
    const currentCat = useCategorieSelector()
    return (<div>{currentCat}</div>)
}