import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books: [
        { id: 1, title: "Garliver Travel", author: "Grarry More" },
        { id: 2, title: "Himu", author: "Humayn Ahmed" },
    ],
};

export const booksSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
    },
});

export const { showBooks } =
    booksSlice.actions;
export default booksSlice.reducer;