import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const CategorieSlice = createSlice({
    name: 'categorie',
    initialState: {
        categorie: ''
    },
    reducers: {
        setCategory: (state, action) => {
            state.categorie = action.payload;
        }
    }
})

export const { setCategory } = CategorieSlice.actions;
export const categorieReducer = CategorieSlice.reducer;
export const useCategorieSelector = () => useSelector((state) => state.categorie.categorie)