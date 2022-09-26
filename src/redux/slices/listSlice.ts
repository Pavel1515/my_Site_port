import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface Ilist {
  listServices: string[];
  listSkill: string[];
}

const initialState: Ilist = {
  listServices: [
    "Сайти для бізнесу",
    "Розробка інтернет магазину під ключ",
    "Дизайн сайту",
    "Landing page",
    "Сайт візитка",
  ],
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
