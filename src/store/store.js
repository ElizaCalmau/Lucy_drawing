import { configureStore } from "@reduxjs/toolkit";
import { categorieReducer } from "./CategorieSlice/CategorieSlice";

export const store = configureStore({
    reducer: {
        categorie: categorieReducer
    }
})