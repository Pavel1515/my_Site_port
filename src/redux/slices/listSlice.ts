import { createSlice } from "@reduxjs/toolkit";
interface Ilist {
  listSkill: string[];
}

const initialState: Ilist = {
  listSkill: [
    "Javascript",
    "Typescript",
    "Python",
    "React Js",
    "Solid Js",
    "Flask",
    "PyTelegramBot",
    "Redux-Toolkit",
    "REST(fetch, Axios)",
    "JSON",
    "HTML",
    "CSS",
    "SASS/SCSS",
    "Tailwind CSS",
    "Git",
  ],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
});

export const {} = listSlice.actions;

export default listSlice.reducer;
