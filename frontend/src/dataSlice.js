import { createSlice } from "@reduxjs/toolkit";
import { getUniqueItems } from "./data/projectData";
let Pro;
let Uni;

async function fetchProjects() {
  return await fetch("https://mcb-portfolio-api.vercel.app/api/stuff")
    .then((data) => {
      return data.json();
    })
    .then((result) => {
      const howManyTimesUse = [];
      Uni = getUniqueItems(result, howManyTimesUse);
      Pro = result;
      return [Pro, Uni, howManyTimesUse];
    });
}
async function deleteProjects(id) {
  return await fetch(`https://mcb-portfolio-api.vercel.app/api/stuff/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
}
async function postFetch(post) {
  console.log(JSON.stringify(post));
  await fetch("https://mcb-portfolio-api.vercel.app/api/stuff/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
}

const Container = await fetchProjects();
const Projects = Container[0].reverse();
const uniqueItems = Container[1];
export const use = Container[2];
const dataSlice = createSlice({
  name: "data",
  initialState: {
    projects: Projects,
    uniqueItems: uniqueItems,
    currentValue: [],
  },
  reducers: {
    addProject: (state, action) => {
      console.log(action.payload);
      postFetch(action.payload);
      state.projects.push(action.payload);
    },
    deleteProject: (state, action) => {
      deleteProjects(action.payload);
    },
    updateUniqueItems: (state) => {
      const allTechno = [];
      const allOutils = [];
      const allMethodologies = [];

      state.projects.forEach((project) => {
        allTechno.push(...project.techno);
        allOutils.push(...project.outils);
        allMethodologies.push(...project.methodologies);
      });

      const uniqueTechno = [...new Set(allTechno)].map((item) =>
        item.split(" ").slice(0, -1).join(" ")
      );
      const uniqueOutils = [...new Set(allOutils)].map((item) =>
        item.split(" ").slice(0, -1).join(" ")
      );
      const uniqueMethodologies = [...new Set(allMethodologies)].map((item) =>
        item.split(" ").slice(0, -1).join(" ")
      );

      state.uniqueItems = {
        techno: uniqueTechno,
        outils: uniqueOutils,
        methodologies: uniqueMethodologies,
      };
    },
  },
});

export const { addProject, updateUniqueItems, deleteProject } =
  dataSlice.actions;
export default dataSlice.reducer;
